import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Luca+Ferrandina+Energieberatung&kgmid=/g/11nb4l8d0v'

const NAV_ITEMS = [
  { to: '/', label: 'Start', end: true },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/ueber-mich', label: 'Über mich' },
  { href: GOOGLE_REVIEWS_URL, label: 'Referenzen', external: true },
  { to: '/faq', label: 'FAQs' },
  { to: '/kontakt', label: 'Kontakt' },
]

function NavLinks({ onNavigate, className }) {
  return (
    <>
      {NAV_ITEMS.map((item) =>
        item.external ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            className={`${className} text-ink-700 hover:text-brand-700`}
          >
            {item.label}
          </a>
        ) : (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              `${className} ${isActive ? 'text-brand-700 font-semibold' : 'text-ink-700 hover:text-brand-700'}`
            }
          >
            {item.label}
          </NavLink>
        )
      )}
    </>
  )
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-brand-100 sticky top-0 bg-white/90 backdrop-blur z-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="logo.png" alt="LF Smart Energy – Luca Ferrandina" className="h-9 w-auto" />
          </Link>

          <img
            src="badge.png"
            alt="Energieeffizienz-Experten für Förderprogramme des Bundes"
            className="absolute left-1/2 -translate-x-1/2 h-6 sm:h-8 w-auto"
          />

          <div className="flex items-center gap-4">
            <nav className="hidden xl:flex items-center gap-6 text-sm">
              <NavLinks className="transition-colors" />
            </nav>

            <button
              className="xl:hidden p-2 text-ink-700"
              aria-label="Menü öffnen"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="xl:hidden flex flex-col gap-1 px-4 pb-4 text-sm">
            <NavLinks className="py-2" onNavigate={() => setMenuOpen(false)} />
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-brand-100 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-500">
          <span>© {new Date().getFullYear()} Luca Ferrandina – Energieberatung</span>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-brand-700">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-brand-700">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
