import { nav } from "../content/site"

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[1.05rem] font-medium tracking-tight text-text"
        >
          Damon Willis, <span className="text-accent">CPP</span>
        </a>
        <ul className="hidden gap-8 font-mono text-[0.72rem] tracking-[0.08em] text-text-dim uppercase sm:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
