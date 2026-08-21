const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Gessy Bags wholesale leather bags"
    >
      <img
        src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=2200&q=90"
        alt="Borse in pelle esposte in showroom"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-white">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-stone-200">
            Gessy Bags / Rimini
          </p>
          <h1 className="font-serif text-6xl font-normal leading-none sm:text-7xl lg:text-8xl">
            Pelletteria di Borse in Pelle e Sintetiche
          </h1>
          <div className="mt-10 max-w-2xl border-l border-white/40 pl-6">
            <p className="text-xl leading-9 text-stone-100">
              Linee essenziali, materiali versatili e forniture pensate per
              boutique, showroom e rivenditori.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-stone-950 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-950 sm:w-auto"
          >
            Contattaci
          </a>
            <a
              href="#products"
              className="inline-flex w-full items-center justify-center border border-white/50 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white hover:text-stone-950 sm:w-auto"
            >
              Vedi collezione
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
