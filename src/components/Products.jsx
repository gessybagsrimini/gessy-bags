import borsa1 from '../assets/borsa1.png'
import borsa2 from '../assets/borsa2.png'
import borsa3 from '../assets/borsa3.jpg'
import borsa4 from '../assets/borsa4.png'
import borsa5 from '../assets/borsa5.png'
import borsa6 from '../assets/borsa6.png'
import borsa7 from '../assets/borsa7.png'
import borsa8 from '../assets/borsa8.png'

const products = [
  {
    name: 'Structured Tote',
    category: 'Pelle',
    image: borsa1,
  },
  {
    name: 'City Shoulder',
    category: 'Pelle',
    image: borsa2,
  },
  {
    name: 'Soft Hobo',
    category: 'Pelle',
    image: borsa3,
  },
  {
    name: 'Minimal Crossbody',
    category: 'Pelle',
    image: borsa4,
  },
  {
    name: 'Classic Shopper',
    category: 'Sintetico',
    image: borsa5,
  },
  {
    name: 'Compact Satchel',
    category: 'Sintetico',
    image: borsa6,
  },
  {
    name: 'Evening Bag',
    category: 'Sintetico',
    image: borsa7,
  },
  {
    name: 'Daily Backpack',
    category: 'Sintetico',
    image: borsa8,
  },
]

const Products = () => {
  return (
    <section id="products" className="bg-stone-50 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-16 grid gap-8 border-b border-stone-300 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-stone-500">
              Ingrosso
            </p>
            <h2 className="font-serif text-5xl font-normal tracking-tight text-stone-950 sm:text-6xl">
              Collezione
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-stone-600 lg:col-span-5">
            Selezione di borse in pelle e sintetiche, pensata per esposizioni
            pulite e assortimenti continuativi.
          </p>
        </div>

        <div
          className="-mx-6 flex snap-x items-end gap-5 overflow-x-auto px-6 pb-10 sm:-mx-8 sm:gap-8 sm:px-8 lg:-mx-12 lg:px-12"
          aria-label="Product carousel"
        >
          {products.map((product, index) => (
            <article
              key={product.name}
              className="w-72 flex-none snap-start sm:w-80 lg:w-96"
            >
              <div className="h-96 overflow-hidden bg-stone-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 grid grid-cols-4 gap-4 border-t border-stone-300 pt-5">
                <p className="font-serif text-2xl text-stone-400">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="col-span-3">
                  <h3 className="text-lg font-medium text-stone-950">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-stone-500">
                    {product.category}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
