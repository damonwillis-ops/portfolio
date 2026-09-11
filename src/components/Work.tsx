import { caseStudies, workIntro, type Block, type CaseStudy } from "../content/caseStudies"
import { selectedWork, workNote, type WorkDiagram } from "../content/work"
import { Rich } from "../lib/rich"
import { BeforeAfter, Flow, SectionHead, StatGrid } from "./ui"
import { AssetRecord, EvalLoop, Lineage, PackageLibrary, StandardCard, SystemMap, ValidationGate } from "./diagrams"
import { ArrowIcon } from "./icons"

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

function CaseArticle({ cs, total }: { cs: CaseStudy; total: number }) {
  return (
    <article id={cs.id} className="sec" aria-labelledby={`${cs.id}-title`}>
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-28" data-reveal>
            <p className="t-meta flex items-center gap-3 text-ink">
              <span className="btn-dot" aria-hidden="true" />
              Case study {cs.num}
            </p>
            <p className="t-meta mt-3">{cs.label}</p>
            <p className="t-caption mt-6 hidden lg:block">
              Sheet {cs.num} / 0{total}
            </p>
            {cs.role && <p className="t-caption mt-2 max-w-[17rem]">{cs.role}</p>}
          </div>
        </aside>
        <div className="min-w-0 lg:col-span-9">
          <h2 id={`${cs.id}-title`} className="t-h1" data-reveal>
            {cs.title}
          </h2>
          <p className="t-lead mt-6 max-w-3xl" data-reveal>
            {cs.dek}
          </p>
          {cs.lead && (
            <div className="sigline mt-14 border-t border-line pt-8" data-reveal>
              <span
                className="t-metric block text-[clamp(3.4rem,1.6rem+7.5vw,7.5rem)]"
                data-count={cs.lead.value}
                aria-hidden="true"
              >
                {cs.lead.value}
              </span>
              <span className="sr-only">{cs.lead.value}</span>
              <span className="mt-4 block max-w-md text-[1.05rem] text-ink-2">{cs.lead.label}</span>
            </div>
          )}
          {cs.stats && (
            <div className="mt-14">
              <StatGrid items={cs.stats} cols={cs.stats.length % 3 === 0 ? 3 : 4} />
            </div>
          )}
          <div className="mt-16 space-y-20">
            {cs.blocks.map((b, i) => (
              <BlockView key={i} b={b} />
            ))}
          </div>
          <div className="mt-20 border-t border-line pt-8" data-reveal>
            <p className="t-meta sec-label">Takeaway</p>
            <p className="t-h2 mt-5 max-w-3xl text-ink">{cs.takeaway}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function CaseStudies() {
  return (
    <section aria-labelledby="work-title">
      <div className="sec">
        <div className="wrap">
          <SectionHead id="work-title" label={workIntro.label} title={workIntro.title} lead={workIntro.lead} />
          <div className="mt-14 grid lg:grid-cols-12 lg:gap-10">
            <ol className="lg:col-span-9 lg:col-start-4">
              {caseStudies.map((cs) => (
                <li key={cs.id} data-reveal>
                  <a
                    href={`#${cs.id}`}
                    className="sigline group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-t border-line py-7 sm:grid-cols-[4rem_1fr_auto]"
                  >
                    <span className="t-meta flex items-center gap-2">
                      <span className="btn-dot" aria-hidden="true" />
                      {cs.num}
                    </span>
                    <span>
                      <span className="t-h2 block text-ink transition-colors group-hover:text-white">{cs.title}</span>
                      <span className="mt-2 block text-[0.98rem] text-ink-2">{cs.dek}</span>
                    </span>
                    <span className="text-ink-3 transition-colors duration-300 group-hover:text-signal">
                      <ArrowIcon />
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      {caseStudies.map((cs) => (
        <CaseArticle key={cs.id} cs={cs} total={caseStudies.length} />
      ))}
    </section>
  )
}

const DIAGRAMS: Record<WorkDiagram, () => React.JSX.Element> = {
  "validation-gate": ValidationGate,
  lineage: Lineage,
  "eval-loop": EvalLoop,
  "standard-card": StandardCard,
  "package-library": PackageLibrary,
}

export function SelectedWork() {
  return (
    <section className="sec" id="selected-work" aria-labelledby="sw-title">
      <div className="wrap">
        <SectionHead id="sw-title" label="Selected work" title="Show the build, not the pitch." lead={workNote} />
        {selectedWork.map((w) => {
          const D = DIAGRAMS[w.diagram]
          return (
            <article
              key={w.id}
              className="mt-16 grid gap-10 border-t border-line pt-10 lg:grid-cols-12"
              aria-labelledby={`${w.id}-title`}
            >
              <div className="lg:col-span-4" data-reveal>
                <p className="t-meta">{w.kicker}</p>
                <h3 id={`${w.id}-title`} className="t-h2 mt-3 text-ink">
                  {w.title}
                </h3>
                <p className="t-body mt-4 text-[0.98rem] leading-relaxed">
                  <Rich text={w.body} />
                </p>
                <ul className="mt-6 space-y-3">
                  {w.notes.map((n) => (
                    <li key={n} className="t-body flex gap-3 text-[0.94rem] leading-relaxed">
                      <span className="mt-[0.6em] h-1 w-1 flex-none bg-ink-3" aria-hidden="true" />
                      <span>
                        <Rich text={n} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="min-w-0 lg:col-span-8 lg:pt-8" data-reveal>
                <D />
              </figure>
            </article>
          )
        })}
      </div>
    </section>
  )
}
