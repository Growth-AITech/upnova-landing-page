import { MessageCircle, Mail } from 'lucide-react'
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

          {/* <div className="flex items-center gap-4">
            <span className="text-vireo-soft-gray">{t('footer.visitUs', { defaultValue: 'Visítanos en' })}</span>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vireo-card-subtle/30 hover:bg-vireo-reflective-cyan/10 border border-vireo-reflective-cyan/20 hover:border-vireo-reflective-cyan/50 rounded-full p-3 transition-all duration-300 hover:scale-105"
            >
              <Instagram size={20} className="text-vireo-reflective-cyan" />
            </a>
          </div> */}
        </div>

        {/* Contact Information */}
        <div className="mt-8 pt-6 border-t border-vireo-reflective-cyan/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* WhatsApp */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle size={20} className="text-vireo-reflective-cyan" />
                <span className="text-vireo-soft-gray font-medium">WhatsApp</span>
              </div>
              <div className="space-y-1 text-center md:text-left">
                <a href="https://wa.me/573213552168" target="_blank" rel="noopener noreferrer"
                   className="block text-vireo-soft-gray/80 hover:text-vireo-reflective-cyan transition-colors duration-300">
                  +39 328 651 7124
                </a>
                <a href="https://wa.me/573188964282" target="_blank" rel="noopener noreferrer"
                   className="block text-vireo-soft-gray/80 hover:text-vireo-reflective-cyan transition-colors duration-300">
                  +57 318 896 4282
                </a>
                <a href="https://wa.me/393286517124" target="_blank" rel="noopener noreferrer"
                   className="block text-vireo-soft-gray/80 hover:text-vireo-reflective-cyan transition-colors duration-300">
                  +57 321 355 2168
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={20} className="text-vireo-reflective-cyan" />
                <span className="text-vireo-soft-gray font-medium">Email</span>
              </div>
              <div className="space-y-1 text-center md:text-left">
                <a href="mailto:vicmanuel2308@gmail.com"
                   className="block text-vireo-soft-gray/80 hover:text-vireo-reflective-cyan transition-colors duration-300">
                  vicmanuel2308@gmail.com
                </a>
                <a href="mailto:dagov1998@gmail.com"
                   className="block text-vireo-soft-gray/80 hover:text-vireo-reflective-cyan transition-colors duration-300">
                  dagov1998@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-vireo-reflective-cyan/10 pt-6">
            <p className="text-vireo-soft-gray/70 text-sm">
              © 2025 Vireo. {t('footer.rights')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
