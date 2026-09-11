import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import { caseStudies, workIntro, type Block, type CaseStudy } from "../content/caseStudies"
import { selectedWork, workNote, type WorkDiagram, type WorkItem } from "../content/work"
import { Rich } from "../lib/rich"
import { BeforeAfter, Explore, Flow, SectionHead, StatGrid } from "./ui"
import { AssetRecord, EvalLoop, Lineage, PackageLibrary, StandardCard, SystemMap, ValidationGate } from "./diagrams"

function Subhead({ children }: { children: string }) {
  return <h3 className="t-meta">{children}</h3>
}

function BlockView({ b }: { b: Block }) {
  switch (b.kind) {
    case "text":
      return (
        <div data-reveal>
          {b.heading && <h3 className="t-h2 text-ink">{b.heading}</h3>}
          <div className="t-body mt-5 max-w-2xl">
            {b.paras.map((p) => (
              <p key={p}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </div>
      )
    case "points":
      return (
        <div>
          <div data-reveal>
            <Subhead>{b.heading}</Subhead>
          </div>
          <ul className="mt-6 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {b.items.map((it) => (
              <li key={it.title} className="sigline border-t border-line pt-5" data-reveal>
                <h4 className="t-h3 text-ink">{it.title}</h4>
                <p className="t-body mt-2 text-[0.97rem] leading-relaxed">
                  <Rich text={it.body} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      )
    case "tags":
      return (
        <div data-reveal>
          <Subhead>{b.heading}</Subhead>
          <ul className="mt-4 flex flex-wrap gap-2">
            {b.items.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </div>
      )
    case "quote":
      return (
        <blockquote className="t-h1 max-w-3xl font-light text-ink" data-reveal>
          <span className="text-signal" aria-hidden="true">
            “
          </span>
          {b.text}
          <span aria-hidden="true">”</span>
        </blockquote>
      )
    case "flow":
      return (
        <div data-reveal>
          {b.heading && <Subhead>{b.heading}</Subhead>}
          <Flow steps={b.steps} caption={b.caption} label={b.heading} />
        </div>
      )
    case "beforeAfter":
      return (
        <div>
          {b.heading && (
            <div data-reveal>
              <Subhead>{b.heading}</Subhead>
            </div>
          )}
          <BeforeAfter before={b.before} after={b.after} caption={b.caption} />
        </div>
      )
    case "diagram":
      return (
        <figure data-reveal>
          {b.id === "system-map" ? <SystemMap /> : <AssetRecord />}
          <figcaption className="t-caption mt-5 max-w-2xl">{b.caption}</figcaption>
        </figure>
      )
    case "questions":
      return (
        <div data-reveal>
          <Subhead>{b.heading}</Subhead>
          <ol className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
            {b.items.map((q, i) => (
              <li key={q} className="flex items-baseline gap-4 bg-bg px-5 py-4">
                <span className="t-meta w-6 flex-none">Q{i + 1}</span>
                <span className="text-[1.02rem] text-ink">{q}</span>
              </li>
            ))}
          </ol>
          <p className="t-caption mt-4">{b.caption}</p>
        </div>
      )
  }
}

function CaseRow({ cs, isOpen, onToggle }: { cs: CaseStudy; isOpen: boolean; onToggle: () => void }) {
  return (
    <article id={cs.id} className="scroll-mt-24 border-t border-line" data-reveal>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${cs.id}-panel`}
        onClick={onToggle}
        className="case-row-btn group grid w-full grid-cols-[1fr_1.75rem] items-start gap-x-4 gap-y-3 py-7 text-left sm:grid-cols-[4rem_1fr_auto_1.75rem] sm:items-center sm:gap-6"
      >
        <span className="t-meta col-span-2 flex items-center gap-2 sm:col-span-1">
          <span className="btn-dot" aria-hidden="true" />
          {cs.num}
        </span>
        <span className="min-w-0">
          <span className="t-h2 block text-ink transition-colors duration-300 group-hover:text-white">
            {cs.title}
          </span>
          <span className="mt-2 block text-[0.98rem] text-ink-2">{cs.dek}</span>
          {/* Mobile keeps the hook: key figure under the dek (desktop shows it in its own column). */}
          <span className="mt-4 flex items-baseline gap-3 sm:hidden" aria-hidden="true">
            <span className="text-[1.6rem] leading-none font-light tracking-tight text-signal">{cs.key.value}</span>
            <span className="t-caption">{cs.key.label}</span>
          </span>
        </span>
        <span className="hidden text-right sm:block">
          <span className="t-stat block whitespace-nowrap" data-count={cs.key.value} aria-hidden="true">
            {cs.key.value}
          </span>
          <span className="sr-only">{cs.key.value}</span>
          <span className="t-caption mt-1 block">{cs.key.label}</span>
        </span>
        <span
          className="case-chevron flex h-7 w-7 flex-none items-center justify-center text-[1.4rem] leading-none font-light text-ink-3"
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div id={`${cs.id}-panel`} className="case-panel-wrap">
        <div className="case-panel-inner">
          <div className="relative pb-14 pl-8 sm:pl-10">
            <span className="case-rail absolute top-0 left-0 h-full w-px bg-signal" aria-hidden="true" />

            {cs.role && <p className="t-caption">{cs.role}</p>}

            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <div>
                <p className="t-meta sec-label">The problem</p>
                <p className="t-body mt-4 max-w-xl leading-relaxed">
                  <Rich text={cs.problem} />
                </p>
              </div>
              <div>
                <p className="t-meta sec-label">The system</p>
                <ul className="mt-4 space-y-3">
                  {cs.system.map((s) => (
                    <li key={s} className="t-body flex gap-3 text-[0.98rem] leading-relaxed">
                      <span className="mt-[0.6em] h-1 w-1 flex-none bg-ink-3" aria-hidden="true" />
                      <span>
                        <Rich text={s} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <p className="t-meta sec-label">The numbers</p>
              <div className="mt-6">
                <StatGrid items={cs.scale} cols={3} tone="ink" />
              </div>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <p className="t-meta sec-label">Takeaway</p>
              <p className="t-h2 mt-5 max-w-3xl text-ink">{cs.takeaway}</p>
            </div>

            {cs.detail.length > 0 && (
              <Explore>
                {cs.detail.map((b, i) => (
                  <BlockView key={i} b={b} />
                ))}
              </Explore>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export function CaseStudies() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.slice(1)
      if (!id || !caseStudies.some((cs) => cs.id === id)) return
      setOpenIds((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" })
      })
    }
    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
        if (window.location.hash === `#${id}`) {
          window.history.replaceState(null, "", window.location.pathname + window.location.search)
        }
      } else {
        next.add(id)
        window.history.replaceState(null, "", `#${id}`)
      }
      return next
    })
  }

  return (
    <section aria-labelledby="work-title">
      <div className="sec">
        <div className="wrap">
          <SectionHead id="work-title" label={workIntro.label} title={workIntro.title} lead={workIntro.lead} />
          <div className="mt-14">
            {caseStudies.map((cs) => (
              <CaseRow key={cs.id} cs={cs} isOpen={openIds.has(cs.id)} onToggle={() => toggle(cs.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const DIAGRAMS: Record<WorkDiagram, () => React.JSX.Element> = {
  "validation-gate": ValidationGate,
  "eval-loop": EvalLoop,
  "standard-card": StandardCard,
  "package-library": PackageLibrary,
  lineage: Lineage,
}

/** One rail entry. Only the active tab carries the amber fill bar: full and
 *  static once the reader has touched the component or reduced motion is on,
 *  otherwise animated and reporting back via onFillEnd so the parent can
 *  advance in lockstep with the visible fill. */
function ConsoleTab({
  w,
  active,
  playing,
  full,
  onSelect,
  onFillEnd,
  tabRef,
}: {
  w: WorkItem
  active: boolean
  playing: boolean
  full: boolean
  onSelect: () => void
  onFillEnd: () => void
  tabRef: (el: HTMLButtonElement | null) => void
}) {
  return (
    <button
      ref={tabRef}
      type="button"
      role="tab"
      id={`sw-tab-${w.id}`}
      aria-selected={active}
      aria-controls={`sw-panel-${w.id}`}
      tabIndex={active ? 0 : -1}
      onClick={onSelect}
      className="console-tab block w-[13.5rem] flex-none snap-start px-5 py-4 text-left lg:w-full"
    >
      <span className="console-tab-kicker t-meta block">{w.kicker}</span>
      <span className="console-tab-title mt-1 block text-[1.05rem] font-medium tracking-tight text-ink-3">
        {w.title}
      </span>
      {active &&
        (full ? (
          <span className="console-bar console-bar--full" aria-hidden="true" />
        ) : (
          <span
            className="console-bar console-bar--anim"
            style={{ animationPlayState: playing ? "running" : "paused" }}
            onAnimationEnd={onFillEnd}
            aria-hidden="true"
          />
        ))}
    </button>
  )
}

/** One system's full detail. Always in the DOM (prerendered, crawlable);
 *  `hidden` just toggles which one is on screen. */
function ConsolePanel({ w, D, active }: { w: WorkItem; D: () => React.JSX.Element; active: boolean }) {
  return (
    <div
      role="tabpanel"
      id={`sw-panel-${w.id}`}
      aria-labelledby={`sw-tab-${w.id}`}
      hidden={!active}
      className="console-panel"
    >
      <h3 className="t-h2 text-ink">{w.title}</h3>
      <p className="t-body mt-4 max-w-2xl">
        <Rich text={w.sentence} />
      </p>
      <p className="t-caption mt-3">
        <Rich text={w.proof} />
      </p>
      <div className="mt-8 rounded-[3px] border border-line bg-bg">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[0.68rem] tracking-[0.1em] text-ink-3 uppercase">
          <span>FIG. {w.kicker}</span>
          <span>Schematic · illustrative</span>
        </div>
        <div className="console-grid p-5 sm:p-8">
          <D />
        </div>
      </div>
      {w.detail.length > 0 && (
        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {w.detail.map((n) => (
            <li key={n} className="flex gap-3 text-[0.94rem] leading-relaxed">
              <span className="mt-[0.6em] h-1 w-1 flex-none bg-ink-3" aria-hidden="true" />
              <span>
                <Rich text={n} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/** Master-detail tabs, one per system, with a subtle "live console"
 *  autoplay: the active tab's bar fills over 9s, then advances, as long as
 *  the section is on screen and the reader hasn't touched it yet. */
export function SelectedWork() {
  const n = selectedWork.length
  const [active, setActive] = useState(0)
  const [stopped, setStopped] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [inView, setInView] = useState(false)
  const [mounted, setMounted] = useState(false)
  const reducedRef = useRef(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setMounted(true)
    if (reducedRef.current) return
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // On phones the rail is a horizontal strip: keep the active tab in it,
  // scrolling the strip only (never the page).
  useEffect(() => {
    const tab = tabRefs.current[active]
    const rail = tab?.parentElement
    if (!tab || !rail || rail.scrollWidth <= rail.clientWidth) return
    const left = rail.scrollLeft + tab.getBoundingClientRect().left - rail.getBoundingClientRect().left
    rail.scrollTo({ left, behavior: reducedRef.current ? "auto" : "smooth" })
  }, [active])

  const stop = () => setStopped(true)
  const playing = mounted && !reducedRef.current && !stopped && !hovered && inView
  const full = stopped || !mounted || reducedRef.current

  function onTabsKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    let next = -1
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % n
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + n) % n
    else if (e.key === "Home") next = 0
    else if (e.key === "End") next = n - 1
    if (next < 0) return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="sec" id="selected-work" aria-labelledby="sw-title">
      <div className="wrap">
        <SectionHead id="sw-title" label="Selected systems" title="Show the build, not the pitch." lead={workNote} />
        <div
          ref={rootRef}
          className="console mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14"
          onClick={stop}
          onKeyDown={stop}
          onTouchStart={stop}
          onFocus={stop}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="Selected systems"
            className="console-rail flex min-w-0 snap-x overflow-x-auto lg:flex-col lg:overflow-visible"
            onKeyDown={onTabsKeyDown}
          >
            {selectedWork.map((w, i) => (
              <ConsoleTab
                key={w.id}
                w={w}
                active={i === active}
                playing={playing}
                full={full}
                onSelect={() => setActive(i)}
                onFillEnd={() => setActive((cur) => (cur + 1) % n)}
                tabRef={(el) => {
                  tabRefs.current[i] = el
                }}
              />
            ))}
          </div>
          <div className="console-stage min-w-0">
            {selectedWork.map((w, i) => (
              <ConsolePanel key={w.id} w={w} D={DIAGRAMS[w.diagram]} active={i === active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
