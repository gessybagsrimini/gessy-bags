import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Products from '../components/Products'
import VisitReasons from '../components/VisitReasons'

const HomePage = () => (
  <>
    <Hero />
    <VisitReasons />
    <Products />
    <Contact stacked />
  </>
)

export default HomePage
