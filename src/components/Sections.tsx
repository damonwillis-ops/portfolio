import type { CSSProperties } from "react"
import { Rich } from "../lib/rich"
import {
  about,
  aiReady,
  capabilities,
  contact,
  experience,
  method,
  metrics,
  metricsNote,
  person,
  principles,
  thesis,
} from "../content/site"
import { Flow, SectionHead } from "./ui"
import { DownloadIcon } from "./icons"

type Vars = CSSProperties & Record<`--${string}`, string | number>

export function Metrics() {
  return (
    <section aria-label="Scale" className="border-y border-line bg-bg-2">
      <div className="wrap py-14 lg:py-20" data-reveal>
        <p className="t-meta sec-label">The evidence</p>
        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          {metrics.map((m, i) => (
            <li
              key={m.label}
              className={`sigline border-t border-line pt-6 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              style={{ "--rest": 0.1 } as Vars}
            >
              <span className="t-metric block" data-count={m.value} aria-hidden="true">
                {m.value}
              </span>
              <span className="sr-only">{m.value}</span>
              <span className="mt-4 block text-[1rem] text-ink-2">{m.label}</span>
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
            <div className="mt-12 max-w-2xl" data-reveal>
              {thesis.body.map((p) => (
                <p key={p} className="t-body">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-12" data-reveal>
              <p className="t-meta">{thesis.dependsLabel}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {thesis.depends.map((d) => (
                  <li key={d} className="tag">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-12 max-w-3xl text-[1.15rem] leading-relaxed text-ink lg:text-[1.25rem]" data-reveal>
              {thesis.position}
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function AIReady() {
  return (
    <section className="sec" id="ai-ready" aria-labelledby="ai-title">
      <div className="wrap">
        <SectionHead id="ai-title" label={aiReady.label} title={aiReady.title} />
        <div className="mt-12 grid lg:grid-cols-12 lg:gap-10">
          <ol className="lg:col-span-9 lg:col-start-4" data-reveal>
            {aiReady.ladder.map((l, i) => (
              <li
                key={l}
                className="py-1.5 text-[1.2rem] leading-snug font-medium tracking-tight text-ink lg:text-[1.45rem]"
                style={{ paddingLeft: `min(${i * 1.6}rem, ${i * 5}vw)` }}
              >
                {l}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-16" data-reveal>
          <Flow steps={aiReady.chain} label="From the physical world to AI" />
        </div>
        <div className="mt-16 grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-9 lg:col-start-4">
            <p className="t-meta" data-reveal>
              {aiReady.whereLabel}
            </p>
            <dl className="mt-5">
              {aiReady.where.map((w) => (
                <div
                  key={w.span}
                  className="sigline grid gap-2 border-t border-line py-5 sm:grid-cols-[13rem_1fr] sm:gap-8"
                  data-reveal
                >
                  <dt className="t-meta pt-1">{w.span}</dt>
                  <dd className="t-body">
                    <Rich text={w.text} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-12 max-w-3xl text-[1.15rem] leading-relaxed text-ink lg:text-[1.25rem]" data-reveal>
              {aiReady.close}
            </p>
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

export function Principles() {
  return (
    <section className="sec" id="principles" aria-labelledby="principles-title">
      <div className="wrap">
        <SectionHead id="principles-title" label={principles.label} title={principles.title} />
        <div className="mt-14 grid lg:grid-cols-12 lg:gap-10">
          <ol className="lg:col-span-9 lg:col-start-4">
            {principles.items.map((p, i) => (
              <li key={p} className="sigline grid grid-cols-[2.5rem_1fr] border-t border-line py-7" data-reveal>
                <span className="t-meta pt-2">0{i + 1}</span>
                <p className="text-[1.3rem] leading-snug font-normal tracking-tight text-ink lg:text-[1.6rem]">{p}</p>
              </li>
            ))}
          </ol>
        </div>
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
            <a href={person.resume} download className="btn btn-solid mt-14">
              Download full resume
              <DownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="sec" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHead id="about-title" label={about.label} title={about.title} />
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="max-w-[18rem] lg:col-span-3 lg:col-start-4 lg:max-w-none" data-reveal>
            <picture>
              <source srcSet="/headshot.webp" type="image/webp" />
              <img
                src="/headshot.jpg"
                alt="Damon Willis"
                width={560}
                height={560}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-[3px] border border-line"
              />
            </picture>
          </div>
          <div className="lg:col-span-6" data-reveal>
            <div className="t-body space-y-5">
              {about.paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-10">
              {about.credentials.map((c) => (
                <li key={c} className="flex items-baseline gap-3 border-t border-line py-3 text-[0.95rem] text-ink">
                  <span className="h-1 w-1 flex-none translate-y-[-0.2em] bg-ink-3" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
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
        <ul className="mt-10 flex flex-wrap gap-2" data-reveal>
          {contact.areas.map((a) => (
            <li key={a} className="tag">
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-3" data-reveal>
          <a href={`mailto:${person.email}`} className="btn btn-solid">
            <span className="btn-dot" aria-hidden="true" />
            Email me
          </a>
          <a href={person.linkedin} className="btn" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={person.resume} download className="btn">
            Resume
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
      </div>
    </section>
  )
}
