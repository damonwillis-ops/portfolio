import { about, hero, person } from "../content/site"
import { DownloadIcon } from "./icons"

/* The thesis as architecture: physical estate at the bottom, signal rising
   through sensors, data, and systems to intelligence and AI. Gray is the
   infrastructure. Amber is the signal moving through it. Full-width band
   under both hero columns, not confined to one — a narrow column-width
   version left a wide dead strip of empty space beside it. */

const SENSOR_X = [142, 234, 327, 419, 512, 604, 696, 789, 881, 974]
const SYSTEMS = [
  { x: 296, label: "ACCESS" },
  { x: 560, label: "VIDEO" },
  { x: 824, label: "LIFECYCLE" },
]
const ROWS = [
  { y: 44, label: "AI", on: true },
  { y: 114, label: "INTELLIGENCE" },
  { y: 194, label: "SYSTEMS" },
  { y: 284, label: "DATA" },
  { y: 370, label: "SENSORS" },
  { y: 402, label: "PHYSICAL" },
]

function HeroSignal() {
  return (
    <div className="w-full" data-progress>
      <svg viewBox="0 0 1050 420" className="sx block h-auto w-full" role="img" aria-label="Signal rising from physical sensors through data and systems to intelligence and AI">
        {ROWS.map((r) => (
          <text key={r.label} x={0} y={r.y + 3} className={r.on ? "sx-m-on" : "sx-m"}>
            {r.label}
          </text>
        ))}

        {/* physical estate */}
        <path d="M120 402 H1010" className="sx-line sx-draw" pathLength={1} />
        {SENSOR_X.map((x) => (
          <path key={`t${x}`} d={`M${x} 402 V396`} className="sx-line" />
        ))}

        {/* sensors up to the data bus */}
        {SENSOR_X.map((x, i) => (
          <path
            key={`s${x}`}
            d={`M${x} 366 V284`}
            className="sx-line sx-draw"
            pathLength={1}
            style={{ ["--delay" as string]: `${0.15 + i * 0.04}s` }}
          />
        ))}
        <path d="M120 284 H1010" className="sx-line sx-draw" pathLength={1} style={{ ["--delay" as string]: "0.5s" }} />

        {/* bus to systems, systems to intelligence, intelligence to AI */}
        {SYSTEMS.map((s) => (
          <path key={`b${s.x}`} d={`M${s.x} 284 V209`} className="sx-line sx-draw" pathLength={1} style={{ ["--delay" as string]: "0.7s" }} />
        ))}
        <path d="M296 179 V148 H824 V179 M560 148 V179 M560 148 V120" className="sx-line sx-draw" pathLength={1} style={{ ["--delay" as string]: "0.9s" }} />
        <path d="M560 108 V53" className="sx-line sx-draw" pathLength={1} style={{ ["--delay" as string]: "1.1s" }} />

        {/* the signal: three pulses, staggered, beneath the nodes */}
        <path d="M234 366 V284 H296 V148 H560 V53" pathLength={100} className="sx-pulse" style={{ ["--delay" as string]: "0.6s", ["--dur" as string]: "7.5s" }} />
        <path d="M604 366 V284 H560 V53" pathLength={100} className="sx-pulse" style={{ ["--delay" as string]: "3.1s", ["--dur" as string]: "7.5s" }} />
        <path d="M881 366 V284 H824 V148 H560 V53" pathLength={100} className="sx-pulse" style={{ ["--delay" as string]: "5.6s", ["--dur" as string]: "7.5s" }} />

        {SENSOR_X.map((x) => (
          <rect key={`n${x}`} x={x - 4} y={362} width={8} height={8} className="sx-node" />
        ))}
        {SENSOR_X.map((x) => (
          <circle key={`j${x}`} cx={x} cy={284} r={2} fill="var(--color-line-2)" />
        ))}
        {SYSTEMS.map((s) => (
          <g key={s.label}>
            <rect x={s.x - 44} y={179} width={88} height={30} rx={2} className="sx-box" />
            <text x={s.x} y={198} textAnchor="middle" className="sx-m">
              {s.label}
            </text>
          </g>
        ))}
        <circle cx={560} cy={114} r={6} className="sx-node" />
        <circle cx={560} cy={44} r={9} fill="var(--color-bg)" stroke="var(--color-signal)" strokeWidth={1.25} />
        <circle cx={560} cy={44} r={3} fill="var(--color-signal)" />
      </svg>
    </div>
  )
}

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
            <div className="t-meta mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-6">
              <a href={`mailto:${person.email}`} className="lnk">
                {person.email}
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="lnk">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-24" data-reveal style={{ ["--d" as string]: "150ms" }}>
          <HeroSignal />
        </div>
      </div>
    </section>
  )
}
