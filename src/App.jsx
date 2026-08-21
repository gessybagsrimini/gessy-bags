
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <Header />
      <main>
        <Hero />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
