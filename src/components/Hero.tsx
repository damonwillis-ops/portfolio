import { about, hero, person } from "../content/site"
import { DownloadIcon } from "./icons"

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 lg:pt-40 lg:pb-24" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="grid gap-14 lg:grid-cols-[1.86fr_1fr] lg:items-start lg:gap-16">
          <div data-reveal>
            <p className="t-meta sec-label">{hero.eyebrow}</p>
            <h1 id="hero-title" className="t-display mt-7">
              {hero.headline}
            </h1>
            <p className="t-lead mt-7 max-w-2xl">{hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-solid">
                See the work
              </a>
              <a href={person.resume} download className="btn">
                Download resume
                <DownloadIcon />
              </a>
            </div>
            <p className="t-caption mt-4">
              <a href={`mailto:${person.email}`} className="lnk">
                {person.email}
              </a>
              <span className="mx-3 text-line-2">/</span>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="lnk">
                LinkedIn
              </a>
            </p>
            <ul className="t-meta mt-10 flex flex-wrap gap-x-5 gap-y-2" aria-label="At a glance">
              {hero.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Identity, not a second hero: no panel background, just a subtle
              rule tying it back to the hero's own grid. */}
          <div
            className="lg:border-l lg:border-line lg:pl-12"
            data-reveal
            style={{ ["--d" as string]: "80ms" }}
          >
            <picture>
              <source srcSet="/headshot.webp" type="image/webp" />
              <img
                src="/headshot.jpg"
                alt={person.name}
                width={220}
                height={264}
                loading="eager"
                decoding="async"
                className="block h-auto w-[11rem] rounded-[3px] border border-line object-cover sm:w-[13rem]"
              />
            </picture>
            <p className="mt-6 text-[1.15rem] font-medium tracking-tight text-ink">{about.name}</p>
            <p className="mt-1 text-[0.92rem] text-ink-2">{about.title}</p>
            <p className="t-body mt-5 max-w-xs text-[0.95rem] leading-relaxed">{about.positioning}</p>
            <span className="mt-6 block h-px w-8 bg-signal" aria-hidden="true" />
            <p className="t-body mt-6 max-w-xs text-[0.95rem] leading-relaxed text-ink-2">{about.pattern}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
