import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Intersection } from "./components/Intersection"
import { Work } from "./components/Work"
import { Translation } from "./components/Translation"
import { Credentials } from "./components/Credentials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intersection />
        <Work />
        <Translation />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
