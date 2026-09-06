import { useRef } from 'react'
import Header from './Header'
import Hero from './Hero'
import Problem from './Problem'
import Solution from './Solution'
import Technology from './Technology'
import Serve from './Serve'
import About from './About'
import ImpactBand from './ImpactBand'
import Contact from './Contact'
import Footer from './Footer'
import { useScrollEffects } from '../hooks/useScrollEffects'
import { colors } from '../lib/theme'

function Home() {
  const headerRef = useRef(null)
  const wrapRef = useRef(null)
  const heroRef = useRef(null)
  const heroInnerRef = useRef(null)
  const bgRef = useRef(null)
  const figureRef = useRef(null)
  const bodyRef = useRef(null)

  const problemRef = useRef(null)
  const solutionRef = useRef(null)
  const technologyRef = useRef(null)
  const serveRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const revealRefs = [problemRef, solutionRef, technologyRef, serveRef, aboutRef, contactRef]

  useScrollEffects({ headerRef, wrapRef, heroRef, heroInnerRef, bodyRef, bgRef, figureRef, revealRefs })

  return (
    <div id="top" style={{ width: '100%', overflowX: 'hidden', background: colors.bg }}>
      <Header ref={headerRef} />

      <div ref={wrapRef} style={{ position: 'relative', zIndex: 0 }}>
        <Hero heroRef={heroRef} heroInnerRef={heroInnerRef} bgRef={bgRef} figureRef={figureRef} />
      </div>

      <div ref={bodyRef} style={{ position: 'relative', zIndex: 10 }}>
        <Problem ref={problemRef} />
        <Solution ref={solutionRef} />
        <Technology ref={technologyRef} />
        <Serve ref={serveRef} />
        <About ref={aboutRef} />
        <ImpactBand />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  )
}

export default Home
