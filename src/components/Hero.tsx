import { hero, person } from "../content/site"
import { DownloadIcon } from "./icons"

/* The thesis as architecture: physical estate at the bottom, signal rising
   through sensors, data, and systems to intelligence and AI. Gray is the
   infrastructure. Amber is the signal moving through it. */

const SENSOR_X = [130, 172, 214, 256, 298, 340, 382, 424, 466, 508]
const SYSTEMS = [
  { x: 200, label: "ACCESS" },
  { x: 320, label: "VIDEO" },
  { x: 440, label: "LIFECYCLE" },
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
    <div className="mx-auto w-full max-w-[34rem]" data-progress>
      <svg viewBox="0 0 520 420" className="sx block h-auto w-full" role="img" aria-label="Signal rising from physical sensors through data and systems to intelligence and AI">
        {ROWS.map((r) => (
          <text key={r.label} x={0} y={r.y + 3} className={r.on ? "sx-m-on" : "sx-m"}>
            {r.label}
          </text>
        ))}

        {/* physical estate */}
        <path d="M120 402 H516" className="sx-line sx-draw" pathLength={1} />
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
        <path d="M120 284 H516" className="sx-line sx-draw" pathLength={1} style={{ ["--delay" as string]: "0.5s" }} />

        {/* bus to systems, systems to intelligence, intelligence to AI */}
        {SYSTEMS.map((s) => (
          <path key={`b${s.x}`} d={`M${s.x} 284 V209`} className="sx-line sx-draw" pathLength={1} style={{ ["--delay" as string]: "0.7s" }} />
        ))}
        <path d="M200 179 V148 H440 V179 M320 148 V179 M320 148 V120" className="sx-line sx-draw" pathLength={1} style={{ ["--delay" as string]: "0.9s" }} />
        <path d="M320 108 V53" className="sx-line sx-draw" pathLength={1} style={{ ["--delay" as string]: "1.1s" }} />

        {/* the signal: three pulses, staggered, beneath the nodes */}
        <path d="M172 366 V284 H200 V148 H320 V53" pathLength={100} className="sx-pulse" style={{ ["--delay" as string]: "0.6s", ["--dur" as string]: "7.5s" }} />
        <path d="M340 366 V284 H320 V53" pathLength={100} className="sx-pulse" style={{ ["--delay" as string]: "3.1s", ["--dur" as string]: "7.5s" }} />
        <path d="M466 366 V284 H440 V148 H320 V53" pathLength={100} className="sx-pulse" style={{ ["--delay" as string]: "5.6s", ["--dur" as string]: "7.5s" }} />

        {SENSOR_X.map((x) => (
          <rect key={`n${x}`} x={x - 4} y={362} width={8} height={8} className="sx-node" />
        ))}
        {SENSOR_X.map((x) => (
          <circle key={`j${x}`} cx={x} cy={284} r={2} fill="var(--color-line-2)" />
        ))}
        {SYSTEMS.map((s) => (
          <g key={s.label}>
            <rect x={s.x - 42} y={179} width={84} height={30} rx={2} className="sx-box" />
            <text x={s.x} y={198} textAnchor="middle" className="sx-m">
              {s.label}
            </text>
          </g>
        ))}
        <circle cx={320} cy={114} r={6} className="sx-node" />
        <circle cx={320} cy={44} r={9} fill="var(--color-bg)" stroke="var(--color-signal)" strokeWidth={1.25} />
        <circle cx={320} cy={44} r={3} fill="var(--color-signal)" />
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 lg:pt-40 lg:pb-24" aria-labelledby="hero-title">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7" data-reveal>
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
        <div className="lg:col-span-5" data-reveal style={{ ["--d" as string]: "150ms" }}>
          <HeroSignal />
        </div>
      </div>
    </section>
  )
}
