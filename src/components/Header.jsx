import { useState } from 'react'
import { address, openingHours, phones } from '../data/business'

const navItems = [
  { label: 'Assortimento', href: '/assortimento' },
  { label: 'Ingrosso', href: '/ingrosso-borse-rimini' },
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Contatti', href: '/contatti' },
]

const Header = ({ currentPath }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [weekdays, sunday] = openingHours

  return (
    <>
      <div className="bg-ink text-sm text-sand">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 sm:px-8">
          <p>
            {address.street}, {address.city} · {weekdays.days} {weekdays.hours} · {sunday.days.toLowerCase()} {sunday.hours.toLowerCase()}
          </p>
          <a href={phones[0].href} className="hidden hover:text-surface sm:inline">
            Tel. {phones[0].display}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-sand bg-canvas">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
          aria-label="Navigazione principale"
        >
          <a href="/" className="font-serif text-2xl text-ink">
            Gessy Bags
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={currentPath === item.href ? 'page' : undefined}
                className="text-[15px] text-ink/80 hover:text-accent aria-[current=page]:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="px-1 py-2 text-[15px] text-ink md:hidden"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Chiudi' : 'Menu'}
          </button>
        </nav>

        {menuOpen && (
          <nav className="border-t border-sand px-5 pb-3 md:hidden" aria-label="Navigazione mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={currentPath === item.href ? 'page' : undefined}
                className="block border-b border-sand/60 py-3 text-ink last:border-b-0 aria-[current=page]:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}

export default Header
