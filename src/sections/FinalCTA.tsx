import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FinalCTA = () => {
  return (
    <section className="py-24 bg-final-gradient text-center">
      <div className="container">
        <h2 className="text-5xl mb-10 font-extrabold text-vireo-soft-gray">
          ¿Listo para dominar tu mercado?
        </h2>
        
        <p className="text-xl text-vireo-soft-gray mb-10 max-w-3xl mx-auto">
          Mientras lees esto, tus competidores están automatizando. 
          No dejes que te adelanten cuando puedes ser tú quien los deje atrás.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-10">
          <a href="#contacto" className="cta-primary text-lg flex items-center justify-center gap-2">
            Quiero mi auditoría gratuita
            <ArrowRight size={18} />
          </a>
          {/* <Link to="/propuesta-valor#VPSuccessStories" className="cta-secondary text-lg">
            Ver casos de éxito
          </Link> */}
        </div>
        
        {/* <p className="text-sm text-vireo-soft-gray/70 mt-8 italic">
          * Garantía de resultados o devolución del 100% de tu inversión
        </p> */}
      </div>
    </section>
  )
}

export default FinalCTA
