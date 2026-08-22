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

const mapUrl = 'https://www.google.com/maps?q=Via%20Arno%206,%20Rimini,%20Italia&output=embed'

const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Via+Arno+6,+47924+Rimini+RN'

const Contact = ({ stacked = false }) => {
  if (stacked) {
    return (
      <section id="contact" className="bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
              Showroom
            </p>
            <h2 className="font-serif text-5xl font-normal tracking-tight text-ink sm:text-6xl">
              Contatti
            </h2>
          </div>

          <div className="mt-12 border-t border-sand">
            <div className="grid gap-3 border-b border-sand py-8 sm:grid-cols-12 sm:items-baseline">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:col-span-3">
                Indirizzo
              </p>
              <address className="font-serif text-2xl not-italic text-ink sm:col-span-9 sm:text-3xl">
                Via Arno 6, 47924 Rimini (RN), Italia
              </address>
            </div>

            <div className="grid gap-3 border-b border-sand py-8 sm:grid-cols-12 sm:items-baseline">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:col-span-3">
                Orari
              </p>
              <div className="text-lg leading-8 text-ink sm:col-span-9">
                <p>Lunedì–Sabato: 08:30–19:00</p>
                <p>Domenica: 08:30–13:00</p>
              </div>
            </div>
          </div>

          <div className="my-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-ink hover:text-surface"
            >
              Indicazioni
            </a>
            <a
              href="https://wa.me/393317419240"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-surface transition hover:bg-transparent hover:text-accent"
            >
              WhatsApp
            </a>
          </div>

          <div className="min-h-96 overflow-hidden border border-sand/70 bg-sand/30">
            <iframe
              title="Mappa dello showroom Gessy Bags"
              src={mapUrl}
              className="h-[28rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-surface py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent">
            Showroom
          </p>
          <h2 className="font-serif text-5xl font-normal tracking-tight text-ink sm:text-6xl">
            Contatti
          </h2>
          <p className="mt-6 text-xl leading-9 text-ink/75">
            Contattaci per catalogo e informazioni
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="bg-canvas p-8 sm:p-10 lg:col-span-5">
            <div className="space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="border-t border-sand pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 inline-block text-lg text-ink transition hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg text-ink">{item.value}</p>
                  )}
                </div>
              ))}

              <div className="border-t border-sand pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Orari
                </p>
                <p className="mt-2 text-lg text-ink">
                  Lunedì-Sabato: 08:30-19:00
                </p>
                <p className="mt-2 text-lg text-ink">Domenica: 08:30-13:00</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-7">
            <div className="min-h-96 overflow-hidden border border-sand/70 bg-sand/30">
              <iframe
                title="Gessy Bags location map"
                src={mapUrl}
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
