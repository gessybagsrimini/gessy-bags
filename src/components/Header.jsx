import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Assortimento', href: '/assortimento' },
  { label: 'Ingrosso', href: '/ingrosso-borse-rimini' },
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Contatti', href: '/contatti' },
]

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-sand/70 bg-canvas/90 backdrop-blur transition-shadow ${
        hasShadow ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="font-serif text-2xl font-normal tracking-wide text-ink"
          aria-label="Gessy Bags home"
        >
          Gessy Bags
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-widest text-ink/70 transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-sand text-ink md:hidden"
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
        </button>
      </nav>

      {menuOpen && (
        <nav className="border-t border-sand/70 bg-canvas px-6 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-sand/70 py-4 text-sm font-semibold uppercase tracking-widest text-ink/75 transition hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
