import { Bot, BarChart3, Link as LinkIcon, TrendingUp } from 'lucide-react'

const VPSolution = () => {
  const solutions = [
    {
      icon: Bot,
      title: "Asistente Inteligente 24/7",
      description: "Un asistente conversacional omnicanal (WhatsApp, web, redes) que guía, vende y resuelve dudas sin descanso."
    },
    {
      icon: BarChart3,
      title: "Plataforma de Marketing IA",
      description: "Un panel de control intuitivo que te da el rendimiento de tu estrategia y te ayuda a crear mensajes que conectan y venden."
    },
    {
      icon: LinkIcon,
      title: "Conexión Total",
      description: "Nos integramos con tus sistemas actuales (CRM/ERP) para que todo tu ecosistema de negocio funcione en perfecta armonía."
    },
    {
      icon: TrendingUp,
      title: "Mejora Continua",
      description: "Ajustamos y perfeccionamos la solución constantemente, usando datos para asegurar que siempre esté optimizada para tu negocio."
    }
  ]

  return (
    <section className="py-20 bg-solution-gradient">
      <div className="container">
        <h2 className="section-title">Nuestra Solución Integral</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-text-gray">
          Implementamos un ecosistema tecnológico diseñado para automatizar, convertir y optimizar tu operación de e-commerce.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index}
                 className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-2xl relative overflow-hidden group">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>
              
              <div className="mb-4">
                <solution.icon size={40} className="mx-auto text-accent-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-accent-blue">
                {solution.title}
              </h3>
              
              <p className="text-text-gray text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VPSolution