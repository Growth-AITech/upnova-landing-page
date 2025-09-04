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