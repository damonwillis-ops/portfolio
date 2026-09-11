// Injects the server-rendered app into dist/index.html so the first paint is
// real HTML: faster LCP, and every word is visible to crawlers and link
// unfurlers without running JavaScript. Runs after both vite builds.

import { readFileSync, rmSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { pathToFileURL } from "node:url"

const out = resolve("dist/index.html")
const ssrEntry = resolve("dist-ssr/entry-server.js")

const { render } = await import(pathToFileURL(ssrEntry).href)
const html = readFileSync(out, "utf8")
const placeholder = '<div id="root"></div>'
if (!html.includes(placeholder)) throw new Error(`prerender: ${placeholder} not found in dist/index.html`)

const app = render()
writeFileSync(out, html.replace(placeholder, `<div id="root">${app}</div>`))
rmSync(resolve("dist-ssr"), { recursive: true, force: true })
console.log(`prerender: ${(app.length / 1024).toFixed(1)} KB of HTML injected`)
