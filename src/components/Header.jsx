import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Menu', href: '#home' },
  { label: 'Prodotti', href: '#products' },
  { label: 'Contatti', href: '#contact' },
]

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-stone-50/90 backdrop-blur transition-shadow ${
        hasShadow ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="font-serif text-2xl font-normal tracking-wide text-stone-950"
          aria-label="Gessy Bags home"
        >
          Gessy Bags
        </a>

        <div className="flex items-center gap-6 sm:gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-widest text-stone-600 transition hover:text-stone-950"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
