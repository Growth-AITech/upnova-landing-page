import { Clock, TrendingUp, DollarSign } from 'lucide-react'

const VPUniqueValue = () => {
  const values = [
    {
      icon: Clock,
      title: "Atención 24/7",
      description: "Tu tienda nunca cierra. Atiende y vende a tus clientes en cualquier momento, cualquier día.",
      color: "accent-orange"
    },
    {
      icon: TrendingUp,
      title: "Más Conversiones",
      description: "Llevamos a los clientes del chat a la compra en un flujo conversacional natural y sin fricciones.",
      color: "accent-blue"
    },
    {
      icon: DollarSign,
      title: "Menos Costos",
      description: "Automatizamos las tareas repetitivas para que inviertas tu tiempo y dinero en lo que realmente importa.",
      color: "accent-purple"
    }
  ]

  return (
    <section className="py-20 px-6 bg-differentiator-gradient">
      <div className="container">
        <h2 className="section-title">Menos Esfuerzo, Más Ventas. Así de Simple.</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-text-gray">
          Una solución que trabaja sin descanso para convertir, mientras tu equipo se enfoca en hacer crecer el negocio.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {values.map((value, index) => (
            <div key={index}
                 className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-2xl relative overflow-hidden group">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>
              
              <div className="mb-6">
                <value.icon size={48} className={`mx-auto text-${value.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {value.title}
              </h3>
              
              <p className="text-text-gray leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VPUniqueValue