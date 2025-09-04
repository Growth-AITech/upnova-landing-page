import { TrendingDown, Clock, AlertTriangle } from 'lucide-react'

const VPProblem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Pérdida de Ventas",
      description: "Carritos abandonados y clientes frustrados por procesos complejos o falta de respuestas a tiempo. Cada duda no resuelta es una venta perdida.",
      color: "accent-orange"
    },
    {
      icon: Clock,
      title: "Costos y Tiempo",
      description: "Tu equipo invierte horas valiosas en preguntas repetitivas, en lugar de enfocarse en tareas estratégicas que realmente hacen crecer el negocio.",
      color: "accent-blue"
    },
    {
      icon: AlertTriangle,
      title: "Riesgo de Marca",
      description: "Una respuesta incorrecta, una demora o una mala experiencia puede dañar la reputación que tanto te ha costado construir.",
      color: "accent-purple"
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="container">
        <h2 className="section-title">Los Desafíos que Frenan tu Crecimiento</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-text-gray">
          La atención inconsistente, la pérdida de ventas y los costos operativos ocultos están afectando tu rentabilidad y tu marca.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index}
                 className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-2xl relative overflow-hidden group">
              {/* Top gradient border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-primary-gradient`}></div>
              
              <div className="mb-6">
                <problem.icon size={48} className={`mx-auto text-${problem.color}`} />
              </div>
              
              <h3 className={`text-xl font-bold mb-3 text-${problem.color}`}>
                {problem.title}
              </h3>
              
              <p className="text-text-gray leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VPProblem