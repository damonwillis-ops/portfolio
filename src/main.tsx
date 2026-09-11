import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "@fontsource-variable/ibm-plex-sans"
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/ibm-plex-mono/500.css"
import "./index.css"
import App from "./App.tsx"

const root = document.getElementById("root")!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The build prerenders the page into #root (scripts/prerender.mjs), so the
// first paint is real HTML. Hydrate when it's there; render in dev.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
