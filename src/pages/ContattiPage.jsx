import Contact from '../components/Contact'
import PageHero from '../components/PageHero'

const ContattiPage = () => (
  <>
    <PageHero
      title="Contatti"
      description="Chiamaci, scrivici su WhatsApp o passa in showroom a Rimini per vedere le collezioni disponibili."
    />
    <Contact showHeading={false} />
  </>
)

export default ContattiPage
