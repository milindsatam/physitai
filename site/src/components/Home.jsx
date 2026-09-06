import { useRef } from 'react'
import Header from './Header'
import Hero from './Hero'
import Problem from './Problem'
import Solution from './Solution'
import Technology from './Technology'
import Serve from './Serve'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import { useHeroPin } from '../hooks/useHeroPin'
import { useHeaderScroll } from '../hooks/useHeaderScroll'
import { useRevealAnimations } from '../hooks/useRevealAnimations'
import { useElementHeight } from '../hooks/useElementHeight'
import { colors } from '../lib/theme'

function Home() {
  const rootRef = useRef(null)
  const headerRef = useRef(null)
  const heroRef = useRef(null)

  const { pinned, height } = useHeroPin(heroRef)
  const headerHeight = useElementHeight(headerRef)
  useHeaderScroll(headerRef, height)
  useRevealAnimations(rootRef)

  // The hero is fixed to the viewport (y=0), but the spacer that reserves
  // its document-flow space sits below the header, which also occupies
  // flow height. Net out the header's height so the section below lines
  // up with the hero's true visual bottom edge instead of leaving a gap.
  const spacerHeight = Math.max(0, height - headerHeight)

  return (
    <div id="top" ref={rootRef} style={{ width: '100%', background: colors.bg }}>
      <Header ref={headerRef} />

      <div style={{ position: 'relative' }}>
        <Hero heroRef={heroRef} pinned={pinned} />
        {pinned && <div style={{ height: spacerHeight }} aria-hidden="true" />}
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Problem />
        <Solution />
        <Technology />
        <Serve />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
