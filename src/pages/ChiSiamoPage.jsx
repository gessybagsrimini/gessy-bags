import PageHero from '../components/PageHero'
import { phones } from '../data/business'

const ChiSiamoPage = () => (
  <>
    <PageHero
      title="Chi siamo"
      description="Gessy Bags è un ingrosso di borse in pelle e sintetiche in Via Arno 6 a Rimini."
    />

    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:items-start">
        <div className="space-y-4 text-lg leading-relaxed text-ink/80">
          <p>
            Da oltre 10 anni riforniamo negozi, boutique e rivenditori. Nel
            magazzino teniamo un assortimento ampio di borse donna, pochette,
            zaini, valigie e accessori, con nuovi arrivi durante tutto l’anno.
          </p>
          <p>
            Seguiamo ogni cliente di persona: in showroom ti aiutiamo a
            scegliere modelli, colori e quantità, e ti teniamo aggiornato su
            disponibilità e novità.
          </p>
          <p>
            Per informazioni chiedi di {phones[0].name} ({phones[0].display}) o
            di {phones[1].name} ({phones[1].display}).
          </p>
          <a href="/contatti" className="inline-block text-accent underline underline-offset-4 hover:text-ink">
            Orari e indicazioni
          </a>
        </div>

        <img
          src="/background.jpg"
          alt="Scaffali e banchi del magazzino Gessy Bags"
          className="aspect-[4/3] w-full rounded-sm object-cover"
          loading="lazy"
        />
      </div>
    </section>
  </>
)

export default ChiSiamoPage
