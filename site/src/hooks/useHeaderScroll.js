import { useEffect } from 'react'

export function useHeaderScroll(headerRef, threshold) {
  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        header.classList.toggle('is-scrolled', window.scrollY > threshold)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [headerRef, threshold])
}
