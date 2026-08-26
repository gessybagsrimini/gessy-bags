const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',

    name: 'Gessy Bags',

    url: 'https://gessybagsrimini.it/',

    description:
      'Ingrosso di borse a Rimini per negozi e rivenditori.',

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Arno 6',
      addressLocality: 'Rimini',
      postalCode: '47924',
      addressRegion: 'RN',
      addressCountry: 'IT',
    },

    telephone: '+39 3318642302',

    email: 'elenaye81@gmail.com',

    sameAs: [
      'https://www.instagram.com/gessybagsrimini'
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export default LocalBusinessSchema