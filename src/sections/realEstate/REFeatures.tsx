import { useEffect, useRef } from 'react'
import { Database, Users, MessageCircle, Zap, BarChart3, Target } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const REFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
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
          if (entry.target === featuresRef.current) {
            const featureCards = entry.target.querySelectorAll('.feature-card')
            featureCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up')
                card.classList.remove('opacity-0', 'translate-y-8')
              }, index * 150)
            })
          }
        }
      })
    }, observerOptions)

    const elements = [titleRef.current, featuresRef.current]
    elements.forEach(el => {
      if (el) {
        observer.observe(el)
      }
    })

    // Initialize title animation
    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
    }

    // Initialize feature cards
    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll('.feature-card')
      cards.forEach(card => {
        card.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
      })
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Database,
      titleKey: 'features.items.dataManagement.title',
      descriptionKey: 'features.items.dataManagement.description',
      gradient: 'from-accent-purple to-accent-blue'
    },
    {
      icon: Users,
      titleKey: 'features.items.unifiedPlatform.title',
      descriptionKey: 'features.items.unifiedPlatform.description',
      gradient: 'from-accent-blue to-accent-orange'
    },
    {
      icon: Zap,
      titleKey: 'features.items.autoDistribution.title',
      descriptionKey: 'features.items.autoDistribution.description',
      gradient: 'from-accent-orange to-accent-purple'
    },
    {
      icon: MessageCircle,
      titleKey: 'features.items.whatsappIntegration.title',
      descriptionKey: 'features.items.whatsappIntegration.description',
      gradient: 'from-accent-purple to-accent-blue'
    },
    {
      icon: Users,
      titleKey: 'features.items.unlimitedUsers.title',
      descriptionKey: 'features.items.unlimitedUsers.description',
      gradient: 'from-accent-blue to-accent-orange'
    },
    {
      icon: Target,
      titleKey: 'features.items.smartAssignment.title',
      descriptionKey: 'features.items.smartAssignment.description',
      gradient: 'from-accent-orange to-accent-purple'
    }
  ]

  return (
    <section className="relative py-24 bg-darker-bg overflow-hidden" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-purple/5 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Section title with similar layout to Seleris */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-2"></div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-500 ease-out">
                  {t('features.title.funcionalidades')}
                </span>
                <span className="block logo-gradient hover:scale-105 transition-transform duration-500 ease-out" style={{ transitionDelay: '100ms' }}>
                  {t('features.title.queTransforman')}
                </span>
              </h2>
              <p className="text-xl text-text-gray hover:text-white transition-colors duration-500" style={{ lineHeight: '1.6' }}>
                {t('features.subtitle')}
              </p>
            </div>
            <div className="md:col-span-2"></div>
          </div>
        </div>

        {/* Features grid with Seleris-like spacing */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="feature-card group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  backdropFilter: 'blur(10px)',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-darker-bg rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:logo-gradient transition-all duration-300">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-text-gray group-hover:text-white transition-colors duration-300 leading-relaxed" style={{ lineHeight: '1.6' }}>
                  {t(feature.descriptionKey)}
                </p>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-20`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-gray mb-8 hover:text-white transition-colors duration-500">
            {t('features.cta')}
          </p>
          <button className="group relative cta-primary px-8 py-4 text-lg font-medium overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {t('buttons.discoverAll', { ns: 'common' })}
            </span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default REFeatures