import { useEffect, useState } from "react"
import { nav, person } from "../content/site"
import { DownloadIcon } from "./icons"

export function Nav() {
  const [active, setActive] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const els = nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((e): e is HTMLElement => e !== null)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    els.forEach((el) => io.observe(el))
    const top = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActive("")
    }
    window.addEventListener("scroll", top, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener("scroll", top)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // The mobile menu renders as a sibling of <header>, not a child: the header's
  // backdrop-filter makes it the containing block for fixed descendants, which
  // would trap the menu inside the 64px bar.
  return (
    <>
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-2.5" onClick={() => setOpen(false)}>
          <span className="text-[1rem] font-medium tracking-tight text-ink">{person.name}</span>
          <span className="t-meta hidden sm:inline">{person.post}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const on = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={on ? "location" : undefined}
                    className={`relative text-[0.88rem] transition-colors duration-300 ${
                      on ? "text-ink" : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-[1.3rem] left-0 h-px w-full origin-left bg-signal transition-transform duration-500 ${
                        on ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                    {item.label}
                  </a>
                </li>
              )
            })}
            <li>
              <a href={person.resume} download className="btn min-h-9 gap-2 px-3.5 text-[0.84rem]">
                Resume
                <DownloadIcon />
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px bg-ink transition-all duration-300 ${
                open ? "top-1.5 w-6 -rotate-45" : "top-3 w-4"
              }`}
            />
          </span>
        </button>
      </div>
    </header>

      {open && (
        <div id="mobile-menu" className="no-print fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg md:hidden">
          <nav aria-label="Mobile" className="wrap py-6">
            <ul>
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-5 text-[1.6rem] font-medium tracking-tight text-ink"
                  >
                    <span className="t-meta">0{i + 1}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <a href={person.resume} download className="btn btn-solid justify-center">
                Download resume
                <DownloadIcon />
              </a>
              <a href={`mailto:${person.email}`} className="btn justify-center">
                {person.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
