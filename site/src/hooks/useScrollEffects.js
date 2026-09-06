import { useEffect } from 'react'

export function useScrollEffects({ headerRef, wrapRef, heroRef, heroInnerRef, bodyRef, bgRef, figureRef, revealRefs }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const header = headerRef.current
    const wrap = wrapRef.current
    const hero = heroRef.current
    const heroInner = heroInnerRef.current
    const body = bodyRef.current
    const bg = bgRef.current
    const fig = figureRef.current

    let io = null
    let revealSafety = null
    let revealPass = null
    const targets = (revealRefs || []).map((r) => r.current).filter(Boolean)

    if (!reduce && 'IntersectionObserver' in window && targets.length) {
      const show = (el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      }
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              show(en.target)
              io.unobserve(en.target)
            }
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      )
      targets.forEach((el) => {
        el.style.transition =
          'opacity 0.8s cubic-bezier(0.22,0.61,0.36,1), transform 0.8s cubic-bezier(0.22,0.61,0.36,1)'
        const r = el.getBoundingClientRect()
        if (r.top < window.innerHeight * 0.94 || r.bottom < 0) {
          show(el)
          return
        }
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        io.observe(el)
      })
      revealPass = () => {
        targets.forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.top < window.innerHeight * 0.94 || r.bottom < 0) {
            show(el)
            io.unobserve(el)
          }
        })
      }
      window.addEventListener('resize', revealPass, { passive: true })
      revealSafety = setTimeout(() => {
        if (revealPass) revealPass()
      }, 1200)
    }

    let pin = 0
    const layout = () => {
      if (!wrap || !hero || !body) return 0
      const narrow = window.innerWidth < 700
      if (narrow || reduce) {
        wrap.style.paddingBottom = '0px'
        body.style.marginTop = '0px'
        if (heroInner) {
          heroInner.style.opacity = '1'
          heroInner.style.transform = 'none'
        }
        pin = 0
        return 0
      }
      pin = Math.round(Math.min(window.innerHeight * 0.55, hero.offsetHeight * 0.7))
      wrap.style.paddingBottom = pin + 'px'
      body.style.marginTop = -pin + 'px'
      return pin
    }
    layout()

    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const y = window.scrollY || 0
        if (revealPass) revealPass()
        if (header) header.style.boxShadow = y > 8 ? '0 4px 24px rgba(10,46,92,0.08)' : 'none'
        if (reduce) return
        if (bg) bg.style.transform = 'translate3d(0,' + (y * 0.12).toFixed(1) + 'px,0)'
        if (fig) fig.style.transform = 'translate3d(0,' + (y * -0.05).toFixed(1) + 'px,0)'
        if (heroInner && pin > 0) {
          const p = Math.max(0, Math.min(1, y / pin))
          heroInner.style.opacity = String(1 - 0.35 * p)
          heroInner.style.transform = 'scale(' + (1 - 0.03 * p).toFixed(4) + ')'
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const onResize = () => {
      layout()
      onScroll()
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      if (io) io.disconnect()
      if (revealSafety) clearTimeout(revealSafety)
      if (revealPass) window.removeEventListener('resize', revealPass)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [headerRef, wrapRef, heroRef, heroInnerRef, bodyRef, bgRef, figureRef, revealRefs])
}
