
import { useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import AssortimentoPage from './pages/AssortimentoPage'
import ChiSiamoPage from './pages/ChiSiamoPage'
import ContattiPage from './pages/ContattiPage'
import HomePage from './pages/HomePage'
import IngrossoPage from './pages/IngrossoPage'

const routes = {
  '/': {
    component: HomePage,
    title: "Gessy Bags | Ingrosso Borse Rimini | Borse Donna all'Ingrosso",
    description:
      'Ingrosso borse a Rimini per negozi e rivenditori. Ampia scelta di borse, articoli in pelle, zaini e accessori senza ordine minimo.',
  },
  '/assortimento': {
    component: AssortimentoPage,
    title: 'Assortimento | Gessy Bags',
    description:
      "Scopri l'assortimento di borse in pelle e sintetiche, zaini e accessori di Gessy Bags.",
  },
  '/ingrosso-borse-rimini': {
    component: IngrossoPage,
    title: 'Ingrosso borse Rimini | Gessy Bags',
    description:
      'Ingrosso borse a Rimini per boutique, negozi e rivenditori. Scopri Gessy Bags e richiedi il catalogo.',
  },
  '/chi-siamo': {
    component: ChiSiamoPage,
    title: 'Chi siamo | Gessy Bags',
    description:
      'Conosci Gessy Bags, ingrosso di borse in pelle e sintetiche a Rimini.',
  },
  '/contatti': {
    component: ContattiPage,
    title: 'Contatti | Gessy Bags',
    description:
      'Contatta Gessy Bags o visita lo showroom in Via Arno 6 a Rimini.',
  },
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const route = routes[path] || routes['/']
  const canonicalPath = routes[path] ? path : '/'
  const Page = route.component

  useEffect(() => {
    document.title = route.title

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://gessybagsrimini.it${canonicalPath === '/' ? '/' : `${canonicalPath}/`}`

    let description = document.querySelector('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }
    description.content = route.description

    window.scrollTo(0, 0)
  }, [canonicalPath, route.description, route.title])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header currentPath={canonicalPath} />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
