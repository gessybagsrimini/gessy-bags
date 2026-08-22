import borsa1 from '../assets/borsa1.png'
import borsa3 from '../assets/borsa3.jpg'
import borsa5 from '../assets/borsa5.png'

const categories = [
  {
    name: 'Borse moda',
    description: 'Forme, colori e dettagli sempre aggiornati.',
    image: borsa3,
    className: 'min-h-[28rem] lg:row-span-2 lg:min-h-[38rem]',
  },
  {
    name: 'Vera pelle',
    description: 'Materiali autentici e modelli senza tempo.',
    image: borsa1,
    className: 'min-h-72 lg:min-h-0',
  },
  {
    name: 'Altro',
    description: 'Accessori e proposte per completare l’assortimento.',
    image: borsa5,
    className: 'min-h-72 lg:min-h-0',
  },
]

const Products = ({ showCta = true }) => {
  return (
    <section id="products" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 grid gap-8 border-b border-sand pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
              Ingrosso
            </p>
            <h2 className="font-serif text-5xl font-normal tracking-tight text-ink sm:text-6xl">
              Collezione
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink/70 lg:col-span-5">
            Esplora le nostre categorie e componi un assortimento adatto al tuo
            punto vendita.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2" aria-label="Categorie della collezione">
          {categories.map((category) => (
            <article
              key={category.name}
              className={`group relative isolate overflow-hidden bg-sand ${category.className}`}
            >
              <img
                src={category.image}
                alt=""
                className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <div className="flex h-full flex-col justify-end p-7 text-surface sm:p-9">
                <h3 className="font-serif text-4xl sm:text-5xl">{category.name}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-surface/80">
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {showCta && (
          <div className="mt-10 flex justify-center">
            <a
              href="/assortimento"
              className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-surface transition hover:bg-transparent hover:text-accent"
            >
              Scopri l’assortimento
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
