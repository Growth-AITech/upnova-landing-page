import { Clock, ArrowRight } from 'lucide-react'

const Offer = () => {
  const offerPoints = [
    "Dónde pierdes el 80% de tus ventas potenciales",
    "Qué procesos automatizar primero para ver ROI inmediato",
    "Cuánto dinero dejas sobre la mesa cada mes",
    "Hoja de ruta personalizada de implementación"
  ]

  // Función para obtener slots disponibles basado en la semana del año
  const getWeeklySlots = () => {
    const now = new Date()
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const weekNumber = Math.ceil(((now.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7)
    
    // Usar el número de semana como semilla para generar un número consistente entre 1-4
    const slots = ((weekNumber - 1) % 4) + 1
    return slots
  }

  const availableSlots = getWeeklySlots()

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
              Auditoría Gratuita de Automatización
            </h2>
            
            <p className="text-xl mb-8 text-vireo-soft-gray">
              En solo 30 minutos descubrirás:
            </p>
            
            <ul className="list-none mb-8 space-y-3">
              {offerPoints.map((point, index) => (
                <li key={index} className="py-3 text-vireo-soft-gray text-lg flex items-center justify-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <a href="#" className="cta-primary text-xl px-12 py-5 flex items-center justify-center gap-2">
              Reservar mi auditoría gratuita
              <ArrowRight size={20} />
            </a>
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
