import { hero } from "../content/site"

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16"
    >
      <p className="reveal mb-6 font-mono text-[0.78rem] tracking-[0.16em] text-accent uppercase">
        {hero.eyebrow}
      </p>

      <h1
        className="reveal mb-7 max-w-[15ch] font-display text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[1.05] tracking-[-0.01em] text-text"
        style={{ animationDelay: "0.1s" }}
      >
        {hero.headline[0]}
        <br />
        {hero.headline[1]}
        <em className="font-normal text-accent italic">
          {hero.headlineEmphasis}
        </em>
      </h1>

      <p
        className="reveal mb-12 max-w-[56ch] text-[clamp(1.05rem,1.6vw,1.22rem)] leading-relaxed text-text-dim"
        style={{ animationDelay: "0.2s" }}
      >
        {hero.sub}
      </p>

      <div
        className="reveal flex flex-wrap border-t border-b border-border"
        style={{ animationDelay: "0.32s" }}
      >
        {hero.claims.map((claim, i) => (
          <div
            key={claim.word}
            className={`flex-1 basis-[200px] py-6 pr-7 ${
              i < hero.claims.length - 1 ? "border-r border-border max-sm:border-r-0 max-sm:border-b" : ""
            } max-sm:basis-full max-sm:py-5`}
          >
            <div className="mb-2 font-mono text-[0.72rem] tracking-[0.14em] text-text-dim uppercase">
              The <b className="font-medium text-accent">{claim.word}</b>
            </div>
            <div className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] leading-none font-normal tabular-nums text-text">
              {claim.figure}
            </div>
            <div className="mt-2 font-mono text-[0.7rem] tracking-[0.04em] text-text-dim">
              {claim.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
