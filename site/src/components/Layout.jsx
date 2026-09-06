import { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useHeaderScroll } from '../hooks/useHeaderScroll'
import { useElementHeight } from '../hooks/useElementHeight'
import { HeaderThresholdContext } from '../context/HeaderThresholdContext'
import { colors } from '../lib/theme'

function Layout() {
  const headerRef = useRef(null)
  const [threshold, setThreshold] = useState(0)
  const headerHeight = useElementHeight(headerRef)

  useHeaderScroll(headerRef, threshold)

  return (
    <div id="top" style={{ width: '100%', background: colors.bg }}>
      <Header ref={headerRef} />
      <HeaderThresholdContext.Provider value={{ headerHeight, setThreshold }}>
        <Outlet />
      </HeaderThresholdContext.Provider>
      {/* Home's hero is position:fixed with z-index 1 and always paints the
          top of the viewport regardless of scroll; without its own stacking
          order the footer (an unpositioned element) would render behind it
          if the page is short enough to scroll the footer into that band. */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
