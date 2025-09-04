import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import VPHero from '../sections/valueProposition/VPHero'
import VPProblem from '../sections/valueProposition/VPProblem'
import VPSolution from '../sections/valueProposition/VPSolution'
import VPUniqueValue from '../sections/valueProposition/VPUniqueValue'
import VPSuccessStories from '../sections/valueProposition/VPSuccessStories'
import VPTeam from '../sections/valueProposition/VPTeam'
import VPBenefits from '../sections/valueProposition/VPBenefits'
import VPContracting from '../sections/valueProposition/VPContracting'
import VPContact from '../sections/valueProposition/VPContact'

const ValueProposition = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])
  return (
    <main>
      <VPHero />
      <VPProblem />
      <VPSolution />
      <VPUniqueValue />
      <VPSuccessStories />
      <VPTeam />
      <VPBenefits />
      <VPContracting />
      <VPContact />
    </main>
  )
}

export default ValueProposition