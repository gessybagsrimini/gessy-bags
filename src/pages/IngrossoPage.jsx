import PageHero from '../components/PageHero'
import { openingHours, whatsappUrl } from '../data/business'

const [weekdays, sunday] = openingHours

const ways = [
  {
    title: 'In showroom',
    text: `Vieni in Via Arno 6 a Rimini, ${weekdays.days.toLowerCase()} ${weekdays.hours}, e scegli i modelli di persona.`,
  },
  {
    title: 'Su WhatsApp',
    text: 'Scrivici per ricevere le foto degli ultimi arrivi e chiedere disponibilità e colori.',
  },
]

const faqs = [
  {
    question: 'C’è un ordine minimo?',
    answer: 'No, non c’è un ordine minimo.',
  },
  {
    question: 'A chi vendete?',
    answer: 'A negozi, boutique e rivenditori.',
  },
  {
    question: 'Quando siete aperti?',
    answer: `${weekdays.days}: ${weekdays.hours}. ${sunday.days}: ${sunday.hours.toLowerCase()}.`,
  },
  {
    question: 'Dove siete?',
    answer: 'In Via Arno 6 a Rimini, vicino all’uscita Rimini Sud dell’autostrada A14.',
  },
]

const IngrossoPage = () => (
  <>
    <PageHero
      title="Ingrosso borse a Rimini"
      description="Gessy Bags rifornisce da oltre 10 anni negozi e rivenditori con borse donna, zaini, valigie e accessori moda, in pelle e in materiali sintetici."
    />

    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Come acquistare</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {ways.map((way) => (
            <div key={way.title} className="border-t border-sand pt-4">
              <h3 className="font-semibold text-ink">{way.title}</h3>
              <p className="mt-1 max-w-md leading-relaxed text-ink/70">{way.text}</p>
            </div>
          ))}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-sm bg-accent px-5 py-3 font-medium text-surface hover:bg-accent/90"
        >
          Richiedi il catalogo
        </a>
      </div>
    </section>

    <section className="border-t border-sand bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Domande frequenti</h2>
        <dl className="mt-6 max-w-3xl divide-y divide-sand border-y border-sand">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-5">
              <dt className="font-semibold text-ink">{faq.question}</dt>
              <dd className="mt-1 leading-relaxed text-ink/70">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  </>
)

export default IngrossoPage
