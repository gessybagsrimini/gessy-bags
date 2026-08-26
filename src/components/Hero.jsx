const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[85svh] items-center overflow-hidden pt-20"
      aria-label="Gessy Bags wholesale leather bags"
    >
      <img
        src="/background.jpg"
        alt="Showroom Gessy Bags a Rimini"
        className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/25" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="max-w-4xl text-surface">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-sand">
            Gessy Bags / Rimini
          </p>
          <h1 className="font-serif text-5xl font-normal leading-[0.98] sm:text-6xl lg:text-7xl">
            Ingrosso di Borse a Rimini
          </h1>
          <div className="mt-8 max-w-2xl border-l border-sand/60 pl-6">
            <p className="text-lg leading-8 text-surface/90 sm:text-xl">
              Gessy Bags è un ingrosso di borse a Rimini specializzato nella vendita B2B a negozianti e rivenditori. Nel nostro magazzino trovi borse donna, pochette, zaini, valigie e accessori moda con nuovi arrivi durante tutto l'anno.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="https://wa.me/393317419240"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center border border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-surface transition hover:border-surface hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink sm:w-auto"
          >
            Contattaci su WhatsApp
          </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Via+Arno+6,+47924+Rimini+RN"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center border border-sand/70 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-surface transition hover:border-sand hover:bg-sand hover:text-ink sm:w-auto"
            >
              Come raggiungerci
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
