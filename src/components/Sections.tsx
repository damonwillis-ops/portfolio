import type { CSSProperties } from "react"
import { Rich } from "../lib/rich"
import {
  aboutSection,
  capabilities,
  contact,
  experience,
  method,
  metricsNote,
  metricsPrimary,
  metricsSecondary,
  person,
  principles,
  thesis,
} from "../content/site"
import { Flow, SectionHead } from "./ui"
import { DownloadIcon, ExternalIcon, MailIcon } from "./icons"

type Vars = CSSProperties & Record<`--${string}`, string | number>

export function Metrics() {
  return (
    <section aria-label="Scale" className="border-y border-line bg-bg-2">
      <div className="wrap py-14 lg:py-20" data-reveal>
        <p className="t-meta sec-label">The evidence</p>

        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-3">
          {metricsPrimary.map((m) => (
            <li key={m.label} className="sigline border-t border-line pt-6" style={{ "--rest": 0.1 } as Vars}>
              <span className="t-metric block" data-count={m.value} aria-hidden="true">
                {m.value}
              </span>
              <span className="sr-only">{m.value}</span>
              <span className="mt-4 block text-[1rem] text-ink-2">{m.label}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-3">
          {metricsSecondary.map((m) => (
            <li key={m.label} style={{ "--rest": 0.15 } as Vars}>
              <span className="t-stat block" data-count={m.value} aria-hidden="true">
                {m.value}
              </span>
              <span className="sr-only">{m.value}</span>
              <span className="mt-2.5 block text-[0.88rem] leading-snug text-ink-2">{m.label}</span>
              {m.note && <span className="t-caption mt-1 block">{m.note}</span>}
            </li>
          ))}
        </ul>

        <p className="t-caption mt-12 max-w-2xl">{metricsNote}</p>
      </div>
    </section>
  )
}

export function Thesis() {
  return (
    <section className="sec" id="thesis" aria-labelledby="thesis-title">
      <div className="wrap">
        <SectionHead id="thesis-title" label={thesis.label} title={thesis.title} />
        <div className="mt-14 grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-9 lg:col-start-4">
            <ol>
              {thesis.statements.map((s, i) => (
                <li
                  key={s}
                  className="sigline flex items-baseline gap-5 border-t border-line py-6 sm:gap-8"
                  data-reveal
                  style={{ "--d": `${i * 80}ms` } as Vars}
                >
                  <span className="t-meta w-6 flex-none">0{i + 1}</span>
                  <span className="t-h2 text-ink">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-16" data-reveal>
              <Flow steps={thesis.chain} label="From the physical world to AI" />
            </div>
            {/* Uncertainty to a decision, in three beats. Type, not a
                diagram: boxes around words earn nothing here. */}
            <ul className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-3">
              {thesis.beats.map((b, i) => (
                <li
                  key={b.title}
                  className="sigline border-t border-line pt-5"
                  data-reveal
                  style={{ "--d": `${i * 80}ms` } as Vars}
                >
                  <p className="t-meta text-signal">0{i + 1}</p>
                  <h3 className="mt-2 text-[1.15rem] font-medium tracking-tight text-ink">{b.title}</h3>
                  <p className="t-body mt-2 text-[0.96rem] leading-relaxed">{b.body}</p>
                  <a
                    href={b.link.href}
                    className="lnk mt-3 inline-block font-mono text-[0.72rem] tracking-[0.08em] uppercase"
                  >
                    {b.link.label} →
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-3xl text-[1.15rem] leading-relaxed text-ink lg:text-[1.25rem]" data-reveal>
              {thesis.close}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Method() {
  return (
    <section className="sec bg-bg-2" aria-labelledby="method-title">
      <div className="wrap">
        <SectionHead id="method-title" label="Operating method" title={method.title} lead={method.lead} />
        <ol
          className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          data-progress
          style={{ "--n": method.steps.length } as Vars}
        >
          {method.steps.map((s, i) => (
            <li key={s.num} className="m-step pt-6" style={{ "--i": i } as Vars}>
              <span className="m-num">{s.num}</span>
              <h3 className="t-h2 mt-3 text-ink">{s.title}</h3>
              <p className="mt-3 text-ink">{s.what}</p>
              <p className="t-caption mt-5">In practice</p>
              <p className="t-body mt-1.5 text-[0.95rem] leading-relaxed">
                <Rich text={s.proof} />
              </p>
              {s.link && (
                <a href={s.link.href} className="lnk mt-2 block font-mono text-[0.72rem] tracking-[0.08em] uppercase">
                  {s.link.label} →
                </a>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-16 border-t border-line pt-10">
          <p className="t-meta sec-label" data-reveal>
            Principles
          </p>
          <div className="mt-8 grid gap-x-10 gap-y-9 lg:grid-cols-3">
            {principles.items.map((p, i) => (
              <div key={p} data-reveal>
                <p className="t-meta">0{i + 1}</p>
                <p className="mt-2 text-[1.15rem] leading-snug tracking-tight text-ink">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Capabilities() {
  return (
    <section className="sec" id="capabilities" aria-labelledby="cap-title">
      <div className="wrap">
        <SectionHead id="cap-title" label={capabilities.label} title={capabilities.title} lead={capabilities.lead} />
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.groups.map((g, i) => (
            <div key={g.name} className="sigline border-t border-line pt-5" data-reveal style={{ "--d": `${i * 80}ms` } as Vars}>
              <h3 className="t-meta text-ink">{g.name}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[0.96rem] leading-snug text-ink-2 transition-colors hover:text-ink">
                    <span className="mt-[0.55em] h-1 w-1 flex-none bg-ink-3" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="t-caption mt-14 max-w-2xl" data-reveal>
          {capabilities.footnote}
        </p>
      </div>
    </section>
  )
}

export function Experience() {
  const n = experience.roles.length
  return (
    <section className="sec bg-bg-2" id="experience" aria-labelledby="exp-title">
      <div className="wrap">
        <SectionHead id="exp-title" label={experience.label} title={experience.title} />
        <div className="mt-14 grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-9 lg:col-start-4">
            <div className="flow" data-progress style={{ "--n": n, "--gap": "2.75rem" } as Vars}>
              <ol className="flow-list">
                {experience.roles.map((r, i) => (
                  <li key={`${r.org}${r.dates}`} className="flow-step" style={{ "--i": i } as Vars}>
                    <span className="flow-node" aria-hidden="true" />
                    {i < n - 1 && (
                      <span className="flow-seg" aria-hidden="true">
                        <span className="flow-pulse" />
                      </span>
                    )}
                    <div className="grid gap-2 md:grid-cols-[10.5rem_1fr] md:gap-8">
                      <p className="t-meta pt-0.5">{r.dates}</p>
                      <div>
                        <h3 className="text-[1.15rem] font-medium tracking-tight text-ink">{r.org}</h3>
                        <p className="mt-0.5 text-[0.95rem] text-ink-2">{r.title}</p>
                        <p className="t-body mt-3 max-w-2xl text-[0.98rem] leading-relaxed">
                          <Rich text={r.summary} />
                        </p>
                        {r.links && (
                          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                            {r.links.map((l) => (
                              <li key={l.href}>
                                <a href={l.href} className="lnk font-mono text-[0.75rem] tracking-[0.08em] uppercase">
                                  {l.label} →
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="sec bg-bg-2" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <p className="t-meta sec-label" data-reveal>
          {contact.label}
        </p>
        <h2 id="contact-title" className="t-display mt-7 max-w-5xl" data-reveal>
          {contact.title}
          <br />
          <span className="text-ink-2">{contact.titleSecond}</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal>
          <a
            href={`mailto:${person.email}`}
            className="btn btn-solid"
            aria-label={`Email ${person.email}`}
          >
            Email
            <MailIcon />
          </a>
          <a href={person.linkedin} className="btn" target="_blank" rel="noopener noreferrer">
            LinkedIn
            <ExternalIcon />
          </a>
          <a href={person.resume} download className="btn">
            Download resume
            <DownloadIcon />
          </a>
        </div>
        <p className="t-caption mt-8" data-reveal>
          <a href={`mailto:${person.email}`} className="lnk">
            {person.email}
          </a>
          <span className="mx-3 text-line-2">/</span>
          {person.location}
        </p>
        <div className="mt-12 border-t border-line pt-8">
          <p className="t-meta sec-label" data-reveal>
            Beyond the systems
          </p>
          <p className="t-body mt-3 max-w-2xl text-ink-2" data-reveal>
            {aboutSection.bio}
          </p>
        </div>
      </div>
    </section>
  )
}
