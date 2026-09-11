// All motion on the site runs from here, once, after hydration.
//
//   [data-reveal]   fades up the first time it enters the viewport
//   [data-count]    counts its number(s) up from zero when revealed
//   [data-progress] gets --p (0..1) as it crosses the viewport, and
//                   [data-live] while on screen; CSS does the rest
//
// One scroll listener, rAF-throttled, touching only elements on screen.
// Reduced motion: everything lands in its final state, nothing moves.

const NUM = /\d[\d,]*(?:\.\d+)?/g

function formatLike(template: string, n: number) {
  const decimals = template.includes(".") ? template.split(".")[1].length : 0
  const fixed = n.toFixed(decimals)
  if (!template.includes(",")) return fixed
  const [int, dec] = fixed.split(".")
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return dec ? `${withCommas}.${dec}` : withCommas
}

function renderAt(source: string, t: number) {
  return source.replace(NUM, (m) => formatLike(m, parseFloat(m.replace(/,/g, "")) * t))
}

function countUp(el: HTMLElement) {
  const source = el.dataset.count ?? ""
  if (!NUM.test(source)) return
  NUM.lastIndex = 0
  const start = performance.now()
  const dur = 1100
  const tick = (now: number) => {
    const x = Math.min(1, (now - start) / dur)
    const eased = 1 - Math.pow(1 - x, 3)
    el.textContent = renderAt(source, eased)
    if (x < 1) requestAnimationFrame(tick)
    else el.textContent = source
  }
  requestAnimationFrame(tick)
}

export function initMotion(): () => void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const cleanups: Array<() => void> = []

  // --- reveal + count ---
  const revealIO = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target as HTMLElement
        el.setAttribute("data-inview", "")
        revealIO.unobserve(el)
        if (!reduced) el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp)
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  )
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    if (!reduced) {
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((c) => {
        const src = c.dataset.count ?? ""
        c.textContent = renderAt(src, 0)
      })
    }
    revealIO.observe(el)
  })
  cleanups.push(() => revealIO.disconnect())

  // --- scroll-linked signal ---
  const progress = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"))
  if (reduced) {
    progress.forEach((el) => el.style.setProperty("--p", "1"))
    return () => cleanups.forEach((fn) => fn())
  }

  const visible = new Set<HTMLElement>()
  let raf = 0
  const update = () => {
    raf = 0
    const vh = window.innerHeight
    visible.forEach((el) => {
      const r = el.getBoundingClientRect()
      const start = vh * 0.9
      const span = r.height + vh * 0.32
      const p = Math.min(1, Math.max(0, (start - r.top) / span))
      el.style.setProperty("--p", p.toFixed(3))
    })
  }
  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(update)
  }

  const liveIO = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement
        if (e.isIntersecting) {
          visible.add(el)
          el.setAttribute("data-live", "")
        } else {
          visible.delete(el)
          el.removeAttribute("data-live")
          // settle to the end state it would have reached
          const r = el.getBoundingClientRect()
          if (r.bottom < 0) el.style.setProperty("--p", "1")
        }
      }
      schedule()
    },
    { rootMargin: "10% 0px 10% 0px" },
  )
  progress.forEach((el) => liveIO.observe(el))

  window.addEventListener("scroll", schedule, { passive: true })
  window.addEventListener("resize", schedule)
  cleanups.push(() => {
    liveIO.disconnect()
    window.removeEventListener("scroll", schedule)
    window.removeEventListener("resize", schedule)
    if (raf) cancelAnimationFrame(raf)
  })

  return () => cleanups.forEach((fn) => fn())
}
