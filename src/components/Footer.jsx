const Footer = () => {
  return (
    <footer className="bg-ink px-6 py-16 text-surface sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-sand/30 pt-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="font-serif text-4xl font-normal tracking-wide">
            Gessy Bags
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Sede
          </p>
          <address className="mt-4 not-italic leading-7 text-sand">
            Via Arno 6
            <br />
            Rimini, Italia
          </address>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Azienda
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-sand">
            Gessy Bags di Ye Xiaorong <br></br>
            Partita IVA: IT03985050404
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Seguici
          </p>
          <div className="mt-4 flex flex-col items-start gap-3">
            <a
              href="https://www.instagram.com/gessybagsrimini"
              target="_blank"
              rel="noreferrer"
              className="border-b border-sand/40 pb-1 text-sm uppercase tracking-widest text-sand transition hover:border-accent hover:text-accent"
            >
              Instagram ↗
            </a>
            <a
              href="https://wa.me/393317419240"
              target="_blank"
              rel="noreferrer"
              className="border-b border-sand/40 pb-1 text-sm uppercase tracking-widest text-sand transition hover:border-accent hover:text-accent"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        <p className="text-sm text-sand/75 sm:self-end lg:text-right">
          &copy; 2026 Gessy Bags
        </p>
      </div>
    </footer>
  )
}

export default Footer
