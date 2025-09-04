import { MessageCircle, Instagram } from 'lucide-react'

const VPContact = () => {
  return (
    <section id="contacto" className="py-20 px-6 bg-hero-gradient text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tu Próximo Nivel de Crecimiento</h2>
          
          <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
            Te llevarás una solución que convierte visitas en ventas, elimina la fricción operativa y libera a tu equipo para que se enfoque en lo que realmente importa: crecer.
          </p>
          
          <div className="bg-white/20 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="font-semibold">
              Es una inversión estratégica con retorno rápido (estimado en pocas semanas) que te colocará por delante de tu competencia al ofrecer atención 24/7, mensajes personalizados y decisiones basadas en datos. Si tu no lo implementas, ellos lo harán, te ganarán ventaja.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="https://wa.link/8spcit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary-gradient text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            
            <a 
              href="https://www.instagram.com/simonpazos_?igsh=YjRkNmZ2YjhpNzll&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary-gradient text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            
            {/* <a 
              href="#contacto" 
              className="cta-secondary flex items-center justify-center gap-2"
            >
              Más información
              <ArrowRight size={18} />
            </a> */}
          </div>
          
          <p className="text-sm text-gray-300 mt-6">
            Solo trabajamos con 5 nuevas empresas al mes
          </p>
        </div>
      </div>
    </section>
  )
}

export default VPContact