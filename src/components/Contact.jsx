const contactItems = [
  {
    label: 'Telefono Elena',
    value: '+39 331 741 9240',
    href: 'tel:+393317419240',
  },
  {
    label: 'Telefono Marco',
    value: '+39 351 630 4766',
    href: 'tel:+393516304766',
  },
  {
    label: 'Email',
    value: 'elenaye81@gmail.com',
    href: 'mailto:elenaye81@gmail.com',
  },
  {
    label: 'Indirizzo',
    value: 'Via Arno 6, Rimini (RN), 47924, Italia',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-stone-500">
            Showroom
          </p>
          <h2 className="font-serif text-5xl font-normal tracking-tight text-stone-950 sm:text-6xl">
            Contatti
          </h2>
          <p className="mt-6 text-xl leading-9 text-stone-700">
            Contattaci per catalogo e informazioni
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="bg-stone-50 p-8 sm:p-10 lg:col-span-5">
            <div className="space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="border-t border-stone-300 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 inline-block text-lg text-stone-950 transition hover:text-stone-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg text-stone-950">{item.value}</p>
                  )}
                </div>
              ))}

              <div className="border-t border-stone-300 pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                  Orari
                </p>
                <p className="mt-2 text-lg text-stone-950">
                  Lunedì-Sabato: 08:30-19:00
                </p>
                <p className="text-lg text-stone-950 mt-2">Domenica: 08:30-13:00</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-7">
            <div className="min-h-96 overflow-hidden border border-stone-200 bg-stone-100">
              <iframe
                title="Gessy Bags location map"
                src="https://www.google.com/maps?q=Via%20Arno%206,%20Rimini,%20Italia&output=embed"
                className="h-full min-h-96 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
