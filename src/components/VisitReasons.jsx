const reasons = [
  {
    title: 'Ampia scelta',
    description: 'Tante categorie e modelli sempre aggiornati.',
  },
  {
    title: 'Affidabilità',
    description: 'Da oltre 10 anni riforniamo negozi, boutique e rivenditori.',
  },
  {
    title: 'Facile da trovare',
    description: 'Siamo vicini all’uscita del casello autostradale Rimini Sud.',
  },
]

const VisitReasons = () => (
  <section className="bg-canvas px-6 py-20 sm:px-8 sm:py-28 lg:px-12" aria-labelledby="visit-reasons-title">
    <div className="mx-auto max-w-7xl">
      <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
        Vieni in showroom
      </p>
      <h2 id="visit-reasons-title" className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Tre buoni motivi per venirci a trovare.
      </h2>

      <div className="mt-14 border-t border-sand sm:mt-20">
        {reasons.map((reason, index) => (
          <div key={reason.title} className="grid gap-4 border-b border-sand py-8 sm:grid-cols-12 sm:items-baseline sm:py-10">
            <p className="font-serif text-xl text-accent sm:col-span-1">
              0{index + 1}
            </p>
            <h3 className="font-serif text-3xl text-ink sm:col-span-4 sm:text-4xl">
              {reason.title}
            </h3>
            <p className="text-lg leading-8 text-ink/70 sm:col-span-6 sm:col-start-7 sm:text-xl">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default VisitReasons
