import { ArrowRight } from 'lucide-react'

const Offer = () => {


  return (
    <section className="py-20 bg-offer-gradient" id="contacto">
      <div className="container">
        <div className="bg-vireo-card-subtle/30 border-2 rounded-3xl p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
             style={{ borderColor: 'rgba(0, 255, 192, 0.3)' }}>
          
          {/* Rotating background animation */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-rotate opacity-5"
               style={{
                 width: '200%',
                 height: '200%',
                 background: 'radial-gradient(circle, rgba(0, 255, 192, 0.05) 0%, transparent 70%)'
               }}>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl mb-8 font-bold">
              Hablemos de tu Proyecto
            </h2>

            <p className="text-xl mb-8 text-vireo-soft-gray">
              Conectemos para entender tus necesidades y diseñar la solución perfecta para tu negocio.
            </p>

            <div className="mb-8 space-y-4">
              <div className="text-center">
                <p className="text-lg text-vireo-soft-gray mb-4">
                  ¿Interesado en nuestros servicios de IA o en VibeMatch?
                </p>
                <p className="text-vireo-soft-gray">
                  Te contactaremos en las próximas 24 horas para agendar una conversación personalizada.
                </p>
              </div>
            </div>

            <a href="https://wa.me/393286517124" target="_blank" rel="noopener noreferrer" className="cta-primary text-xl px-12 py-5 flex items-center justify-center gap-2">
              Contactar por WhatsApp
              <ArrowRight size={20} />
            </a>

            {/* <div className="mt-6 text-center">
              <a href="mailto:contacto@vireo.com" className="text-vireo-reflective-cyan hover:text-white transition-colors duration-300">
                O envíanos un email: contacto@vireo.com
              </a>
            </div> */}
{/*             
            <div className="bg-vireo-reflective-cyan/10 border border-vireo-reflective-cyan rounded-lg p-4 mt-8 text-vireo-reflective-cyan flex items-center justify-center gap-2">
              <Clock size={20} />
              Solo quedan {availableSlots} slots disponibles esta semana
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
