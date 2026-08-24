import { translation } from "../content/intersection"

export function Translation() {
  return (
    <section className="mx-auto max-w-6xl border-t border-border px-6 py-16 sm:px-8 sm:py-20">
      <div className="mb-2 font-mono text-[0.72rem] tracking-[0.16em] text-accent uppercase">
        {translation.eyebrow}
      </div>
      <h2 className="mb-12 max-w-[30ch] font-display text-[clamp(1.8rem,3.4vw,2.6rem)] leading-tight text-text">
        {translation.headline}
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 sm:gap-14">
        {translation.pairs.map((pair) => (
          <div key={pair.prompt}>
            <h3 className="mb-3 font-display text-[1.15rem] text-accent">{pair.prompt}</h3>
            <p className="max-w-[42ch] leading-relaxed text-text-dim">{pair.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
