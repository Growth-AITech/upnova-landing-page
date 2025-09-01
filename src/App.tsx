import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import PainPoints from './sections/PainPoints'
import Solution from './sections/Solution'
import SocialProof from './sections/SocialProof'
import Differentiator from './sections/Differentiator'
import Offer from './sections/Offer'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'
//import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen bg-darker-bg">
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <SocialProof />
        <Differentiator />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      {/* <WhatsAppFloat /> */}
    </div>
  )
}

export default App
