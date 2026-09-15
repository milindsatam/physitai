import { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Technology from '../components/Technology'
import Serve from '../components/Serve'
import ClinicalPositioning from '../components/ClinicalPositioning'
import CtaBand from '../components/CtaBand'
import { useHeroPin } from '../hooks/useHeroPin'
import { useRevealAnimations } from '../hooks/useRevealAnimations'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useHeaderLayout } from '../context/HeaderThresholdContext'

function HomePage() {
  const heroRef = useRef(null)
  const { headerHeight, setThreshold } = useHeaderLayout()

  const { pinned, height } = useHeroPin(heroRef)
  useRevealAnimations()
  useDocumentMeta(
    'PhysiTAI — Making recovery measurable',
    'PhysiTAI is a rehabilitation intelligence platform in development, bringing patient-reported pain, movement and thermal imaging into one clinician-reviewed view of recovery.'
  )

  useEffect(() => {
    setThreshold(height)
  }, [height, setThreshold])

  // The hero is fixed to the viewport (y=0), but the spacer that reserves
  // its document-flow space sits below the header, which also occupies
  // flow height. Net out the header's height so the section below lines
  // up with the hero's true visual bottom edge instead of leaving a gap.
  const spacerHeight = Math.max(0, height - headerHeight)

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Hero heroRef={heroRef} pinned={pinned} />
        {pinned && <div style={{ height: spacerHeight }} aria-hidden="true" />}
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Problem />
        <Solution />
        <Technology />
        <Serve />
        <ClinicalPositioning />
        <CtaBand />
      </div>
    </>
  )
}

export default HomePage
