const FAQ = () => {
  const faqs = [
    {
      question: "¿Es muy complejo de implementar?",
      answer: "Para nada. Configuramos todo tu sistema en máximo 7 días. Tu equipo solo necesita aprender a usarlo, no a construirlo."
    },
    {
      question: "¿Y si mi equipo no es técnico?",
      answer: "Perfecto, diseñamos todo para ser intuitivo. Incluimos entrenamiento personalizado y soporte continuo para asegurar adopción total."
    },
    {
      question: "¿Funciona en mi industria?",
      answer: "Hemos automatizado desde e-commerce hasta servicios B2B complejos. La IA se adapta a tu modelo de negocio específico."
    },
    {
      question: "¿Cuánto cuesta?",
      answer: "Garantizamos ROI en 90 días o te devolvemos tu inversión. El costo se paga solo con el tiempo que recupera tu equipo."
    }
  ]

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {faqs.map((faq, index) => (
            <div key={index}
                 className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.04] hover:border-accent-blue/30">
              <h3 className="text-lg font-semibold mb-4 text-text-light">
                {faq.question}
              </h3>
              <p className="text-text-gray leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ