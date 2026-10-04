import { directionsUrl, whatsappUrl } from '../data/business'

const Hero = () => {
  return (
    <section className="border-b border-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Ingrosso di borse a Rimini
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
            Gessy Bags vende solo all'ingrosso, a negozi e rivenditori. In magazzino
            trovi borse donna, pochette, zaini, valigie e accessori moda, con
            nuovi arrivi durante tutto l'anno.
          </p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/80">
            Vieni a scegliere di persona in Via Arno 6, vicino al casello
            Rimini Sud.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-accent px-6 py-3 text-center font-medium text-surface hover:bg-accent/90"
            >
              Scrivici su WhatsApp
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-ink/30 px-6 py-3 text-center font-medium text-ink hover:border-ink"
            >
              Indicazioni stradali
            </a>
          </div>
        </div>

        <figure>
          <img
            src="/background.jpg"
            alt="Il magazzino Gessy Bags in Via Arno 6 a Rimini"
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
          <figcaption className="mt-2 text-sm text-ink/60">
            Il nostro magazzino in Via Arno 6.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
