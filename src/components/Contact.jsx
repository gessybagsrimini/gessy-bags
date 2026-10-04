import {
  address,
  directionsUrl,
  email,
  mapEmbedUrl,
  openingHours,
  phones,
  whatsappUrl,
} from '../data/business'

const Contact = ({ showHeading = true }) => {
  return (
    <section id="contact" className="border-t border-sand bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        {showHeading && (
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-ink">
            Orari e contatti
          </h2>
        )}

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="font-semibold text-ink">Indirizzo</h3>
              <address className="mt-2 not-italic leading-relaxed text-ink/80">
                Gessy Bags
                <br />
                {address.street}
                <br />
                {address.postalCode} {address.city} ({address.province})
              </address>
            </div>

            <div>
              <h3 className="font-semibold text-ink">Orari di apertura</h3>
              <table className="mt-2 w-full max-w-xs text-ink/80">
                <tbody>
                  {openingHours.map((row) => (
                    <tr key={row.days}>
                      <th scope="row" className="py-1 pr-6 text-left font-normal">
                        {row.days}
                      </th>
                      <td className="py-1 text-right tabular-nums">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-semibold text-ink">Telefono ed email</h3>
              <ul className="mt-2 space-y-1 text-ink/80">
                {phones.map((phone) => (
                  <li key={phone.href}>
                    {phone.name}:{' '}
                    <a href={phone.href} className="text-ink underline-offset-4 hover:underline">
                      {phone.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${email}`} className="text-ink underline-offset-4 hover:underline">
                    {email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm bg-accent px-5 py-3 text-center font-medium text-surface hover:bg-accent/90"
              >
                WhatsApp
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-ink/30 px-5 py-3 text-center font-medium text-ink hover:border-ink"
              >
                Indicazioni stradali
              </a>
            </div>
          </div>

          <iframe
            title="Mappa: Gessy Bags, Via Arno 6, Rimini"
            src={mapEmbedUrl}
            className="h-80 w-full rounded-sm border border-sand lg:col-span-3 lg:h-full lg:min-h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
