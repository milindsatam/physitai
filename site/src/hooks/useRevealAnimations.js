import { useEffect } from 'react'

export function useRevealAnimations(rootRef) {
  useEffect(() => {
    const root = (rootRef && rootRef.current) || document
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = Array.prototype.slice.call(root.querySelectorAll('[data-reveal]'))
    if (!targets.length) return undefined

    const show = (el) => el.classList.add('is-visible')

    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach(show)
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )

    const isNear = (el) => {
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight * 0.94 && r.bottom > 0
    }

    targets.forEach((el) => {
      if (isNear(el)) {
        show(el)
        return
      }
      io.observe(el)
    })

    const safety = setTimeout(() => {
      targets.forEach((el) => {
        if (isNear(el)) {
          show(el)
          io.unobserve(el)
        }
      })
    }, 1200)

    return () => {
      io.disconnect()
      clearTimeout(safety)
    }
  }, [rootRef])
}
