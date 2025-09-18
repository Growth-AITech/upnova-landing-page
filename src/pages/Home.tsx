import Hero from '../sections/Hero'
import AboutUs from '../sections/PainPoints'
import VibeMatchFeatures from '../sections/Solution'
import EarlyAdopters from '../sections/SocialProof'
import VireoAdvantage from '../sections/Differentiator'
import Offer from '../sections/Offer'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <VibeMatchFeatures />
      {/* <EarlyAdopters /> */}
      <VireoAdvantage />
      <Offer />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

export default Home