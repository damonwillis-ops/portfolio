import { useEffect } from "react"
import { initMotion } from "./lib/motion"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { CaseStudies, SelectedWork } from "./components/Work"
import {
  About,
  AIReady,
  Capabilities,
  Contact,
  Experience,
  Method,
  Metrics,
  Principles,
  Thesis,
} from "./components/Sections"
import { Footer } from "./components/Footer"

// Narrative order (revised 2026-09-11 for the hero/identity refinement):
// hero + identity as one integrated two-column system (who he is lives in
// the hero now, not a separate section) -> the evidence -> the thesis ->
// what he did (case studies, then selected systems) -> how he thinks
// (method, the AI bridge, capabilities, principles) -> the record -> the
// person, in more depth than the hero's identity column gave (About, real
// bio + credentials, right before the ask) -> the ask. The two wrapper ids
// exist so the nav's Work / How I Think items stay lit across every section
// they cover.

function App() {
  useEffect(() => initMotion(), [])

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-sm bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Metrics />
        <Thesis />
        <div id="work">
          <CaseStudies />
          <SelectedWork />
        </div>
        <div id="how-i-work">
          <Method />
          <AIReady />
          <Capabilities />
          <Principles />
        </div>
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
