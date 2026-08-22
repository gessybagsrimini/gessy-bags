import PageHero from '../components/PageHero'

const ChiSiamoPage = () => (
  <>
    <PageHero
      eyebrow="La nostra realtà"
      title="Chi siamo"
      description="Gessy Bags è un punto di riferimento a Rimini per la vendita all’ingrosso di borse in pelle e sintetiche."
    />
    <section className="bg-surface px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <p className="font-serif text-3xl leading-snug text-ink sm:text-4xl lg:col-span-5">
          Un assortimento concreto, scelto con attenzione e vicino alle esigenze di chi vende.
        </p>
        <div className="space-y-6 text-lg leading-8 text-ink/70 lg:col-span-6 lg:col-start-7">
          <p>
            Nel nostro showroom di Via Arno 6 accogliamo boutique e rivenditori con una selezione ampia di modelli, colori e materiali.
          </p>
          <p>
            Seguiamo ogni cliente in modo diretto, dalla scelta dei prodotti alle informazioni sulla disponibilità, per rendere semplice ogni fornitura.
          </p>
          <a href="/contatti" className="inline-flex border-b border-accent pb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Vieni a trovarci
          </a>
        </div>
      </div>
    </section>
  </>
)

export default ChiSiamoPage
