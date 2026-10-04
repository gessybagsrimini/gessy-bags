import borsa1 from '../assets/borsa1.png'
import borsa2 from '../assets/borsa2.png'
import borsa3 from '../assets/borsa3.jpg'
import borsa4 from '../assets/borsa4.png'
import borsa5 from '../assets/borsa5.png'
import borsa6 from '../assets/borsa6.png'
import borsa7 from '../assets/borsa7.png'
import borsa8 from '../assets/borsa8.png'
import PageHero from '../components/PageHero'
import { whatsappUrl } from '../data/business'

const categories = [
  ['Borse donna', 'A mano, a spalla, a tracolla e shopper.'],
  ['Pochette', 'Modelli da giorno e da sera.'],
  ['Zaini', 'In pelle e in materiali sintetici.'],
  ['Valigie', 'Valigie e borse da viaggio.'],
  ['Accessori moda', 'Per completare l’assortimento del negozio.'],
]

const models = [
  { image: borsa8, caption: 'Borsa a mano con foulard' },
  { image: borsa6, caption: 'Borsa a spalla, più colori' },
  { image: borsa4, caption: 'Borsa a spalla effetto cavallino' },
  { image: borsa3, caption: 'Shopper intrecciata' },
  { image: borsa2, caption: 'Zaino patchwork' },
  { image: borsa1, caption: 'Borsa in paglia con manici in bambù' },
  { image: borsa5, caption: 'Borsa all’uncinetto con frange' },
  { image: borsa7, caption: 'Shopper in tela animalier' },
]

const AssortimentoPage = () => (
  <>
    <PageHero
      title="Assortimento"
      description="Borse in pelle e in materiali sintetici, zaini, valigie e accessori. I modelli cambiano spesso: per vedere cosa c’è in magazzino oggi, passa in showroom o chiedi il catalogo."
    />

    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Categorie</h2>
        <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([name, text]) => (
            <div key={name} className="border-t border-sand pt-4">
              <dt className="font-semibold text-ink">{name}</dt>
              <dd className="mt-1 text-ink/70">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="border-t border-sand bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Alcuni modelli</h2>
        <p className="mt-2 text-ink/70">
          Foto indicative. Disponibilità e colori variano in base agli arrivi.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {models.map((model) => (
            <li key={model.caption}>
              <img
                src={model.image}
                alt={model.caption}
                className="aspect-[4/5] w-full rounded-sm bg-sand object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-ink">{model.caption}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-sm border border-sand bg-surface p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="text-ink">
            Vuoi le foto degli ultimi arrivi? Scrivici e ti mandiamo il catalogo aggiornato.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block shrink-0 rounded-sm bg-accent px-5 py-3 font-medium text-surface hover:bg-accent/90 sm:mt-0"
          >
            Chiedi su WhatsApp
          </a>
        </div>
      </div>
    </section>
  </>
)

export default AssortimentoPage
