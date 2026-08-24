import { contact } from "../content/contact"

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-16 border-t border-border px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 font-mono text-[0.72rem] tracking-[0.16em] text-accent uppercase">
            {contact.eyebrow}
          </div>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] leading-none text-text">
            {contact.headline}
          </h2>
          <p className="mb-8 max-w-[42ch] leading-relaxed text-text-dim">{contact.body}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="border border-accent px-5 py-2.5 font-mono text-[0.78rem] tracking-[0.04em] text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-[0.78rem] tracking-[0.04em] text-text-dim transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <img
          src="/headshot.jpg"
          alt="Damon Willis, CPP"
          className="h-28 w-28 shrink-0 rounded-full border border-border object-cover grayscale-[15%] sm:h-32 sm:w-32"
        />
      </div>
    </section>
  )
}
