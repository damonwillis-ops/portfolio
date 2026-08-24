import { intersection } from "../content/intersection"

export function Intersection() {
  return (
    <section
      id="intersection"
      className="mx-auto max-w-6xl scroll-mt-16 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mb-2 font-mono text-[0.72rem] tracking-[0.16em] text-accent uppercase">
        {intersection.eyebrow}
      </div>
      <h2 className="mb-12 max-w-[20ch] font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight text-text">
        {intersection.headline}
      </h2>

      <div className="space-y-6">
        {intersection.rows.map((row, i) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 border-b border-border pb-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <p className="max-w-[46ch] text-text-dim">{row.label}</p>
            <p
              className={`shrink-0 font-display leading-none tabular-nums ${
                i === intersection.rows.length - 1
                  ? "text-accent text-[clamp(1.8rem,3.2vw,2.4rem)]"
                  : "text-text text-[clamp(1.4rem,2.4vw,1.9rem)]"
              }`}
            >
              {row.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
