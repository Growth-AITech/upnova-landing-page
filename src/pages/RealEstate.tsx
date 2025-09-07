import REHero from '../sections/realEstate/REHero'
import REFeatures from '../sections/realEstate/REFeatures'
import REPricing from '../sections/realEstate/REPricing'
import REBenefits from '../sections/realEstate/REBenefits'

const RealEstate = () => {
  return (
    <main className="min-h-screen bg-darker-bg">
      <REHero />
      <REFeatures />
      <REBenefits />
      <REPricing />
    </main>
  )
}

export default RealEstate