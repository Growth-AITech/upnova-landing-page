import { Rocket, Zap, TrendingUp, ArrowRight } from 'lucide-react'

const Solution = () => {
  const pillars = [
    {
      icon: Rocket,
      title: "Automatización Inteligente",
      features: [
        "CRM con IA que califica leads automáticamente",
        "Respuestas instantáneas 24/7 con chatbots IA",
        "Workflows que nutren prospectos sin intervención"
      ]
    },
    {
      icon: Zap,
      title: "Marketing que Convierte", 
      features: [
        "Campañas optimizadas por algoritmos",
        "Contenido generado con IA personalizado",
        "Testing automático A/B continuo"
      ]
    },
    {
      icon: TrendingUp,
      title: "Escala Predecible",
      features: [
        "Dashboard unificado de métricas",
        "Predicción de ventas con IA",
        "Sistema que aprende y mejora solo"
      ]
    }
  ]

  return (
    <section className="py-20 bg-solution-gradient">
      <div className="container">
        <h2 className="section-title">El Sistema UPNOVA: IA + Automatización + Resultados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {pillars.map((pillar, index) => (
            <div key={index}
                 className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-2xl relative overflow-hidden group">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>
              
              <div className="mb-5">
                <pillar.icon size={48} className="mx-auto text-accent-blue" />
              </div>
              
              <h3 className="text-2xl mb-4 font-semibold logo-gradient">
                {pillar.title}
              </h3>
              
              <ul className="list-none text-left text-text-gray space-y-2">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="py-2 pl-5 relative">
                    <ArrowRight size={16} className="absolute left-0 top-2.5 text-accent-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution