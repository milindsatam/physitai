import { useEffect, useState } from 'react'

export function useElementHeight(ref) {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const measure = () => {
      const next = ref.current ? ref.current.offsetHeight : 0
      setHeight((prev) => (prev === next ? prev : next))
    }

    measure()
    window.addEventListener('resize', measure, { passive: true })

    let ro = null
    if ('ResizeObserver' in window && ref.current) {
      ro = new ResizeObserver(measure)
      ro.observe(ref.current)
    }

    return () => {
      window.removeEventListener('resize', measure)
      if (ro) ro.disconnect()
    }
  }, [ref])

  return height
}
