import { useState } from 'react'
import { Crown, Target, Settings } from 'lucide-react'

const VPBenefits = () => {
  const [activeRole, setActiveRole] = useState('ceo')

  const benefitsData = {
    ceo: {
      title: 'Para el CEO / Fundador',
      icon: Crown,
      points: [
        'Escala el negocio sin aumentar significativamente la plantilla.',
        'Obtén datos clave para tomar decisiones comerciales más rápidas y acertadas.',
        'Reduce el riesgo operativo durante picos de alta demanda.'
      ]
    },
    marketing: {
      title: 'Para el Líder de Marketing',
      icon: Target,
      points: [
        'Genera y reutiliza contenido creado por IA para anuncios y landing pages.',
        'Centraliza todas tus métricas en un dashboard único y fácil de entender.',
        'Realiza testing de mensajes en conversaciones reales para optimizar campañas.'
      ]
    },
    ops: {
      title: 'Para Operaciones / Atención al Cliente',
      icon: Settings,
      points: [
        'Ofrece respuestas instantáneas y dirige a los clientes a la venta o citas de forma automática.',
        'Disminuye drásticamente los errores manuales en la toma de pedidos.',
        'Permite un escalado humano inteligente solo cuando sea estrictamente necesario.'
      ]
    }
  }

  const roles = [
    { key: 'ceo', label: 'CEO / Fundador' },
    { key: 'marketing', label: 'Líder de Marketing' },
    { key: 'ops', label: 'Operaciones / Atención' }
  ]

  const currentData = benefitsData[activeRole as keyof typeof benefitsData]

  return (
    <section className="py-20 px-6">
      <div className="container">
        <h2 className="section-title">Beneficios a la Medida de tu Equipo</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-text-gray">
          Nuestra solución impacta positivamente en cada área clave de tu negocio. Selecciona un rol para ver cómo.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {/* Role Selector */}
          <div className="flex justify-center mb-8 rounded-lg p-1 bg-white/[0.03] border border-white/10">
            {roles.map((role) => (
              <button
                key={role.key}
                onClick={() => setActiveRole(role.key)}
                className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeRole === role.key
                    ? 'bg-primary-gradient text-white shadow-md'
                    : 'text-text-gray hover:bg-white/[0.05]'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
          
          {/* Benefits Content */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 min-h-[200px] relative overflow-hidden">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <currentData.icon size={32} className="text-accent-blue" />
              <h3 className="text-2xl font-bold text-white">
                {currentData.title}
              </h3>
            </div>
            
            <ul className="space-y-4 text-text-gray">
              {currentData.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 leading-relaxed">
                  <div className="w-2 h-2 bg-primary-gradient rounded-full mt-2 flex-shrink-0"></div>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VPBenefits