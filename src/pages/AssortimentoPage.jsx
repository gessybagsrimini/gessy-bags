import PageHero from '../components/PageHero'

const AssortimentoPage = () => (
  <>
    <PageHero
      eyebrow="Collezioni"
      title="Assortimento"
      description="Borse da giorno, modelli compatti e proposte da sera in pelle e materiali sintetici."
    />
    <section className="bg-canvas px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl border-t border-sand pt-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Work in progress
        </p>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-6xl lg:col-span-7">
            Stiamo preparando il nostro assortimento online.
          </h2>
          <p className="max-w-lg text-lg leading-8 text-ink/70 lg:col-span-4 lg:col-start-9">
            Nel frattempo puoi contattarci per ricevere il catalogo aggiornato o
            visitare il nostro showroom a Rimini.
          </p>
        </div>
        <a
          href="https://wa.me/393317419240"
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex border border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-surface transition hover:bg-transparent hover:text-accent"
        >
          Scrivici su WhatsApp
        </a>
      </div>
    </section>
  </>
)

export default AssortimentoPage
