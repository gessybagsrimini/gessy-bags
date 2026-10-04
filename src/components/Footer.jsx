import { address, email, instagramUrl, openingHours, phones, whatsappUrl } from '../data/business'

const Footer = () => {
  return (
    <footer className="bg-ink text-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm leading-relaxed sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl text-surface">Gessy Bags</p>
          <address className="mt-2 not-italic">
            {address.street}
            <br />
            {address.postalCode} {address.city} ({address.province})
          </address>
        </div>

        <div>
          <p className="font-semibold text-surface">Orari</p>
          <ul className="mt-2">
            {openingHours.map((row) => (
              <li key={row.days}>
                {row.days}: {row.hours}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-surface">Contatti</p>
          <ul className="mt-2">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="hover:text-surface">
                  {phone.name} {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`} className="hover:text-surface">
                {email}
              </a>
            </li>
            <li className="mt-2 flex gap-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-surface">
                WhatsApp
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-surface">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-surface">Dati aziendali</p>
          <p className="mt-2">
            Gessy Bags di Ye Xiaorong
            <br />
            P. IVA IT03985050404
          </p>
          <p className="mt-4 text-sand/70">&copy; {new Date().getFullYear()} Gessy Bags</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
