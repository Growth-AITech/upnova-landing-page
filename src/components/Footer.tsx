import { Instagram } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="py-12 bg-vireo-deep-night border-t border-vireo-reflective-cyan/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="logo-gradient text-2xl font-bold">
              Vireo
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-vireo-soft-gray">{t('footer.visitUs', { defaultValue: 'Visítanos en' })}</span>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-vireo-card-subtle/30 hover:bg-vireo-reflective-cyan/10 border border-vireo-reflective-cyan/20 hover:border-vireo-reflective-cyan/50 rounded-full p-3 transition-all duration-300 hover:scale-105"
            >
              <Instagram size={20} className="text-vireo-reflective-cyan" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-vireo-reflective-cyan/10 text-center">
          <p className="text-vireo-soft-gray/70 text-sm">
            © 2025 Vireo. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
