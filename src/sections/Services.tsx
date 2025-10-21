import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation('home')

  const servicesData = {
    mainServices: [
      {
        title: t('services.mainServices.cards.chatbots.title'),
        description: t('services.mainServices.cards.chatbots.description')
      },
      {
        title: t('services.mainServices.cards.voiceBots.title'),
        description: t('services.mainServices.cards.voiceBots.description')
      },
      {
        title: t('services.mainServices.cards.smartAgenda.title'),
        description: t('services.mainServices.cards.smartAgenda.description')
      }
    ],
    intermediateServices: [
      {
        title: t('services.intermediateServices.cards.seoContent.title'),
        description: t('services.intermediateServices.cards.seoContent.description')
      },
      {
        title: t('services.intermediateServices.cards.landingPages.title'),
        description: t('services.intermediateServices.cards.landingPages.description')
      },
      {
        title: t('services.intermediateServices.cards.aiStack.title'),
        description: t('services.intermediateServices.cards.aiStack.description')
      }
    ],
    advancedServices: [
      {
        title: t('services.advancedServices.cards.predictiveAI.title'),
        description: t('services.advancedServices.cards.predictiveAI.description')
      },
      {
        title: t('services.advancedServices.cards.dashboards.title'),
        description: t('services.advancedServices.cards.dashboards.description')
      }
    ]
  }

  return (
    <section className="relative py-24 bg-darker-bg overflow-hidden" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker-bg via-dark-bg/30 to-darker-bg"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Main title */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-2"></div>
            <div className="md:col-span-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-500 ease-out">
                  {t('services.mainTitle.part1')}
                </span>
                <span className="block logo-gradient hover:scale-105 transition-transform duration-500 ease-out" style={{ transitionDelay: '100ms' }}>
                  {t('services.mainTitle.part2')}
                </span>
                <span className="block hover:scale-105 transition-transform duration-500 ease-out" style={{ transitionDelay: '200ms' }}>
                  {t('services.mainTitle.part3')}
                </span>
              </h1>
              <p className="text-xl text-text-gray hover:text-white transition-colors duration-500" style={{ lineHeight: '1.6' }}>
                {t('services.subtitle')}
              </p>
            </div>
            <div className="md:col-span-2"></div>
          </div>
        </div>

        {/* Block 1: Main Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {t('services.mainServices.title')}
            </h2>
            <p className="text-lg text-text-gray max-w-3xl mx-auto">
              {t('services.mainServices.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:logo-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Intermediate Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {t('services.intermediateServices.title')}
            </h2>
            <p className="text-lg text-text-gray max-w-3xl mx-auto">
              {t('services.intermediateServices.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.intermediateServices.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:logo-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Block 3: Advanced Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {t('services.advancedServices.title')}
            </h2>
            <p className="text-lg text-text-gray max-w-3xl mx-auto">
              {t('services.advancedServices.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicesData.advancedServices.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:logo-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services