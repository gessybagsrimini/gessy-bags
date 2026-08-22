import PageHero from '../components/PageHero'

const services = [
  ['Selezione ampia', 'Modelli e finiture pensati per boutique, negozi e rivenditori multimarca.'],
  ['Fornitura continuativa', 'Assortimenti aggiornati e disponibilità adatta alle esigenze del punto vendita.'],
  ['Supporto diretto', 'Un contatto semplice con il nostro showroom per catalogo, ordini e informazioni.'],
]

const IngrossoPage = () => (
  <>
    <PageHero
      eyebrow="Gessy Bags / Rimini"
      title="Ingrosso borse a Rimini"
      description="Un partner diretto per rivenditori alla ricerca di borse versatili, contemporanee e pronte per il punto vendita."
    />
    <section className="bg-canvas px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl lg:col-span-5">
            Forniture costruite intorno al tuo negozio.
          </h2>
          <div className="grid gap-8 lg:col-span-7">
            {services.map(([title, text], index) => (
              <article key={title} className="grid gap-4 border-t border-sand pt-7 sm:grid-cols-5">
                <p className="font-serif text-2xl text-accent">0{index + 1}</p>
                <div className="sm:col-span-4">
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-ink/70">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <a href="/contatti" className="mt-16 inline-flex border border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-surface transition hover:bg-transparent hover:text-accent">
          Richiedi il catalogo
        </a>
      </div>
    </section>
  </>
)

export default IngrossoPage
