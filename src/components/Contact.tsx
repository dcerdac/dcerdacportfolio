export default function Contact() {

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#111518] to-[#0a0e12] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-blue-900/5"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="space-y-8 max-w-2xl">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Connect</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply chat about data science and energy technology.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                { icon: '📧', label: 'Email', value: 'dcerdac@gmail.com', href: 'mailto:dcerdac@gmail.com' },
                { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/diegocerdac', href: 'https://linkedin.com/in/diegocerdac' },
                { icon: '📱', label: 'Phone', value: '+1 (346) 232-5758', href: 'tel:+13462325758' },
                { icon: '🐙', label: 'GitHub', value: 'github.com/dcerdac', href: 'https://github.com/dcerdac' },
                { icon: '📄', label: 'Download CV', value: 'Diego_Cerda_CV.pdf', href: '/cv/Diego_Cerda_CV.pdf', download: 'Diego_Cerda_CV.pdf' }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  {...(contact.download && { download: contact.download })}
                  className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-800/50 group"
                >
                  <div className="text-2xl">{contact.icon}</div>
                  <div>
                    <div className="text-gray-400 text-sm">{contact.label}</div>
                    <div className="text-white group-hover:text-blue-400 transition-colors">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}