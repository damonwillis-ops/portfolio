import { credentials, stack } from "../content/credentials"

export function Credentials() {
  return (
    <section className="mx-auto max-w-6xl border-t border-border px-6 py-16 sm:px-8 sm:py-20">
      <div className="mb-2 font-mono text-[0.72rem] tracking-[0.16em] text-accent uppercase">
        {credentials.eyebrow} &amp; {stack.eyebrow}
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {credentials.badges.map((b) => (
          <span
            key={b}
            className="border border-border px-3 py-1.5 font-mono text-[0.72rem] tracking-[0.04em] text-text"
          >
            {b}
          </span>
        ))}
      </div>

      <div className="grid gap-10 sm:grid-cols-2 sm:gap-14">
        {stack.groups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 font-display text-[1.1rem] text-text">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-border px-2.5 py-1 font-mono text-[0.7rem] text-text-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
