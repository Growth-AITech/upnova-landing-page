import Hero from '../sections/Hero'
import VibeMatchFeatures from '../sections/Solution'
import Services from '../sections/Services'
import VireoAdvantage from '../sections/Differentiator'
import Offer from '../sections/Offer'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <AboutUs /> */}
      <Services />
      <VibeMatchFeatures />
      <VireoAdvantage />
      <Offer />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

export default Home