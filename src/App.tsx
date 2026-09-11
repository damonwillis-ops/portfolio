import { useEffect } from "react"
import { initMotion } from "./lib/motion"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { CaseStudies, SelectedWork } from "./components/Work"
import { Capabilities, Contact, Experience, Method, Metrics, Thesis } from "./components/Sections"
import { Footer } from "./components/Footer"

// Narrative order (revised 2026-09-11 editorial restructure): hero + identity
// as one integrated two-column system (who he is lives in the hero, at
// #identity, which is also where nav "About" points now) -> the evidence ->
// the thesis, folded together with the AI bridge (chain + close) -> what he
// did (case studies as an in-place accordion, then selected systems) -> how
// he thinks (method, with its principles strip folded in, then
// capabilities) -> the record -> the ask, with the "beyond the systems" bio
// folded into Contact instead of a separate About section. The two wrapper
// ids exist so the nav's Work / How I Think items stay lit across every
// section they cover.

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
          <Capabilities />
        </div>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
