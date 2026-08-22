
import { useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import AssortimentoPage from './pages/AssortimentoPage'
import ChiSiamoPage from './pages/ChiSiamoPage'
import ContattiPage from './pages/ContattiPage'
import HomePage from './pages/HomePage'
import IngrossoPage from './pages/IngrossoPage'

const routes = {
  '/': { component: HomePage, title: 'Gessy Bags | Ingrosso borse a Rimini' },
  '/assortimento': { component: AssortimentoPage, title: 'Assortimento | Gessy Bags' },
  '/ingrosso-borse-rimini': { component: IngrossoPage, title: 'Ingrosso borse Rimini | Gessy Bags' },
  '/chi-siamo': { component: ChiSiamoPage, title: 'Chi siamo | Gessy Bags' },
  '/contatti': { component: ContattiPage, title: 'Contatti | Gessy Bags' },
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const route = routes[path] || routes['/']
  const Page = route.component

  useEffect(() => {
    document.title = route.title
    window.scrollTo(0, 0)
  }, [route.title])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
