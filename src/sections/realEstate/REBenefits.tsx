import { useEffect, useRef } from 'react'
import { Brain, Clock, TrendingUp, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const REBenefits = () => {
  const titleRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('realEstate')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            entry.target.classList.add('animate-slide-up')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
          if (entry.target === benefitsRef.current) {
            const benefitItems = entry.target.querySelectorAll('.benefit-item')
            benefitItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-up')
                item.classList.remove('opacity-0', 'translate-y-8')
              }, index * 200)
            })
          }
        }
      })
    }, observerOptions)

    const elements = [titleRef.current, benefitsRef.current]
    elements.forEach(el => {
      if (el) {
        observer.observe(el)
      }
    })

    // Initialize animations
    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
    }

    if (benefitsRef.current) {
      const items = benefitsRef.current.querySelectorAll('.benefit-item')
      items.forEach(item => {
        item.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
      })
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: Brain,
      titleKey: 'benefits.items.aiInsights.title',
      descriptionKey: 'benefits.items.aiInsights.description',
      statsKey: 'benefits.items.aiInsights.stats',
      gradient: 'from-accent-purple to-accent-blue'
    },
    {
      icon: Clock,
      titleKey: 'benefits.items.realTimeData.title',
      descriptionKey: 'benefits.items.realTimeData.description',
      statsKey: 'benefits.items.realTimeData.stats',
      gradient: 'from-accent-blue to-accent-orange'
    },
    {
      icon: TrendingUp,
      titleKey: 'benefits.items.smartPricing.title',
      descriptionKey: 'benefits.items.smartPricing.description',
      statsKey: 'benefits.items.smartPricing.stats',
      gradient: 'from-accent-orange to-accent-purple'
    },
    {
      icon: Shield,
      titleKey: 'benefits.items.salesPipeline.title',
      descriptionKey: 'benefits.items.salesPipeline.description',
      statsKey: 'benefits.items.salesPipeline.stats',
      gradient: 'from-accent-purple to-accent-orange'
    }
  ]

  return (
    <section className="relative py-24 bg-darker-bg overflow-hidden" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker-bg via-dark-bg/30 to-darker-bg"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-2"></div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-500 ease-out">
                  {t('benefits.title.tecnologia')}
                </span>
                <span className="block logo-gradient hover:scale-105 transition-transform duration-500 ease-out" style={{ transitionDelay: '100ms' }}>
                  {t('benefits.title.deVanguardia')}
                </span>
              </h2>
              <p className="text-xl text-text-gray hover:text-white transition-colors duration-500" style={{ lineHeight: '1.6' }}>
                {t('benefits.subtitle')}
              </p>
            </div>
            <div className="md:col-span-2"></div>
          </div>
        </div>

        {/* Benefits grid */}
        <div ref={benefitsRef} className="space-y-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`benefit-item grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:text-right' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Content */}
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="group hover:scale-105 transition-all duration-500">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r ${benefit.gradient} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="w-full h-full bg-darker-bg rounded-3xl flex items-center justify-center">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:logo-gradient transition-all duration-300">
                      {t(benefit.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-text-gray mb-6 leading-relaxed group-hover:text-white transition-colors duration-300" style={{ lineHeight: '1.6' }}>
                      {t(benefit.descriptionKey)}
                    </p>

                    {/* Stats */}
                    <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${benefit.gradient} bg-opacity-10 border border-white/10 group-hover:border-white/20 transition-all duration-300`}>
                      <span className="text-sm font-semibold text-white group-hover:logo-gradient transition-all duration-300">
                        {t(benefit.statsKey)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual element */}
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="group relative">
                    {/* Main visual box */}
                    <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-12 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Content placeholder */}
                      <div className="relative z-10 space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${benefit.gradient} animate-pulse`}></div>
                          <div className="h-2 bg-white/10 rounded-full flex-1 group-hover:bg-white/20 transition-colors duration-300"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-white/10 rounded-full w-full group-hover:bg-white/20 transition-colors duration-300"></div>
                          <div className="h-2 bg-white/10 rounded-full w-3/4 group-hover:bg-white/20 transition-colors duration-300"></div>
                          <div className="h-2 bg-white/10 rounded-full w-1/2 group-hover:bg-white/20 transition-colors duration-300"></div>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                          <div className={`text-2xl font-bold logo-gradient group-hover:scale-110 transition-transform duration-300`}>
                            {index + 1}.
                          </div>
                          <div className="flex space-x-2">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${benefit.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${benefit.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
                          </div>
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-orange/30 rounded-full animate-float group-hover:bg-accent-orange/50 transition-colors duration-300"></div>
                      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-accent-purple/20 rounded-full animate-float group-hover:bg-accent-purple/40 transition-colors duration-300" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-20">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex -space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue p-[1px]">
                <div className="w-full h-full bg-darker-bg rounded-full flex items-center justify-center text-white font-bold">AI</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-accent-orange p-[1px]">
                <div className="w-full h-full bg-darker-bg rounded-full flex items-center justify-center text-white font-bold">ML</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-orange to-accent-purple p-[1px]">
                <div className="w-full h-full bg-darker-bg rounded-full flex items-center justify-center text-white font-bold">+</div>
              </div>
            </div>
            <div className="text-sm text-text-gray hover:text-white transition-colors duration-300">
              {t('benefits.aiPowered')}
            </div>
          </div>

          <button className="group relative cta-primary px-8 py-4 text-lg font-medium overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {t('buttons.knowMoreTech', { ns: 'common' })}
            </span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default REBenefits