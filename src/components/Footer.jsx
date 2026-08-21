const Footer = () => {
  return (
    <footer className="bg-stone-950 px-6 py-16 text-stone-100 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-stone-700 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-4xl font-normal tracking-wide">
            Gessy Bags
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Sede
          </p>
          <address className="mt-4 not-italic leading-7 text-stone-300">
            Via Arno 6
            <br />
            Rimini, Italia
          </address>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Azienda
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-stone-300">
            Gessy Bags di Ye Xiaorong <br></br>
            Partita IVA: IT03985050404
          </p>
        </div>

        <p className="text-sm text-stone-400 sm:self-end lg:text-right">
          &copy; 2026 Gessy Bags
        </p>
      </div>
    </footer>
  )
}

export default Footer
