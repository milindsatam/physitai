import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// A route swap can trigger some late browser-side scroll correction (seen
// landing near the sticky header's height, in either direction) that isn't
// fully suppressed by overflow-anchor: none and doesn't always resolve on
// the very next frame. Re-assert the intended scroll position for a short
// window after navigating so the last write wins once the browser settles,
// instead of guessing a fixed number of frames.
const SETTLE_MS = 400

function holdScroll(apply) {
  let raf = null
  const start = performance.now()
  const step = (now) => {
    apply()
    if (now - start < SETTLE_MS) raf = requestAnimationFrame(step)
  }
  raf = requestAnimationFrame(step)
  return () => {
    if (raf) cancelAnimationFrame(raf)
  }
}

// Runs on every route change. A link with a hash (e.g. Link to="/#solution")
// scrolls to that section once it's mounted, waiting a few frames for a
// freshly-navigated page to render; everything else lands at the top. An
// in-page anchor (path unchanged, hash changes) scrolls smoothly, matching
// native anchor behavior; a cross-page jump lands instantly, since animating
// a scroll on a page that just mounted elsewhere reads as a glitch, not a nav.
function ScrollManager() {
  const location = useLocation()
  const prevPathname = useRef(location.pathname)

  useLayoutEffect(() => {
    const pathChanged = prevPathname.current !== location.pathname
    prevPathname.current = location.pathname

    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      const behavior = pathChanged ? 'instant' : 'smooth'
      let cancelHold = null
      let raf = null
      let attempts = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ block: 'start', behavior })
          cancelHold = holdScroll(() => {
            document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' })
          })
        } else if (attempts++ < 30) {
          raf = requestAnimationFrame(tryScroll)
        }
      }
      tryScroll()
      return () => {
        if (raf) cancelAnimationFrame(raf)
        if (cancelHold) cancelHold()
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    const cancelHold = holdScroll(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }))
    return cancelHold
  }, [location.pathname, location.hash])

  return null
}

export default ScrollManager
