import { person } from "../content/site"

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-caption">
          © 2026 {person.name}, {person.post}
        </p>
        <p className="t-caption">Schematics redrawn. No proprietary data on this site. No trackers.</p>
      </div>
    </footer>
  )
}
