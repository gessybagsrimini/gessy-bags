const reasons = [
  {
    title: 'Senza ordine minimo',
    description: 'Scegli solo i modelli e le quantità che ti servono.',
  },
  {
    title: 'Oltre 10 anni di attività',
    description: 'Riforniamo negozi, boutique e rivenditori.',
  },
  {
    title: 'Nuovi arrivi tutto l’anno',
    description: 'L’assortimento cambia spesso: passa a vedere le novità.',
  },
  {
    title: 'Vicino al casello Rimini Sud',
    description: 'Siamo vicini all’uscita dell’autostrada A14.',
  },
]

const VisitReasons = () => (
  <section className="bg-surface" aria-label="Perché sceglierci">
    <dl className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
      {reasons.map((reason) => (
        <div key={reason.title}>
          <dt className="font-semibold text-ink">{reason.title}</dt>
          <dd className="mt-1 leading-relaxed text-ink/70">{reason.description}</dd>
        </div>
      ))}
    </dl>
  </section>
)

export default VisitReasons
