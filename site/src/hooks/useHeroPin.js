import { useEffect, useState } from 'react'

const NARROW_BREAKPOINT = 700

export function useHeroPin(heroRef) {
  const [state, setState] = useState({ pinned: false, height: 0 })

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const measure = () => {
      const narrow = window.innerWidth < NARROW_BREAKPOINT
      const pinned = !narrow && !reduce
      const height = heroRef.current ? heroRef.current.offsetHeight : 0
      setState((prev) => (prev.pinned === pinned && prev.height === height ? prev : { pinned, height }))
    }

    measure()
    window.addEventListener('resize', measure, { passive: true })

    let ro = null
    if ('ResizeObserver' in window && heroRef.current) {
      ro = new ResizeObserver(measure)
      ro.observe(heroRef.current)
    }

    return () => {
      window.removeEventListener('resize', measure)
      if (ro) ro.disconnect()
    }
  }, [heroRef])

  return state
}
