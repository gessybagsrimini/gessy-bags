import borsa1 from '../assets/borsa1.png'
import borsa2 from '../assets/borsa2.png'
import borsa3 from '../assets/borsa3.jpg'
import borsa8 from '../assets/borsa8.png'

const categories = [
  { name: 'Borse donna', image: borsa8 },
  { name: 'Vera pelle', image: borsa3 },
  { name: 'Borse estive', image: borsa1 },
  { name: 'Zaini', image: borsa2 },
]

const Products = () => {
  return (
    <section className="border-t border-sand bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Cosa trovi in magazzino
          </h2>
          <a href="/assortimento" className="text-accent underline underline-offset-4 hover:text-ink">
            Vedi tutto l’assortimento
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {categories.map((category) => (
            <li key={category.name}>
              <a href="/assortimento" className="group block">
                <img
                  src={category.image}
                  alt={category.name}
                  className="aspect-[4/5] w-full rounded-sm bg-sand object-cover"
                  loading="lazy"
                />
                <p className="mt-3 font-medium text-ink group-hover:text-accent">
                  {category.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Products
