export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div className="relative overflow-hidden @[480px]:rounded-2xl">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMYeysC0HSn4NLHLwqvVJt63vT1qEwTO5GKzd9LxqneeZcOMlO9G9UaDgyRTz4Jt22C8yTEcB_Jjyx8po3FecZD9MiReP-kPvrSZuEf2KKg8zNH3UHYQkVTqA0mzyouH17lhQB6n7w8nWWrBPOMXkXYOgpH2qPfVtVJNXr1U-DDYlFyNzzGi0mVt-3C9YrVlbC1aWMe25P90P-eIiPclfAwo3un2XULe0VQWgZvPPUB3E5He7CZWeIJCI9mvq5LQtKFTX_XWIfK6U')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          
          {/* Content */}
          <div className="relative flex min-h-[600px] flex-col gap-8 items-start justify-center px-6 py-20 @[480px]:px-12 @[480px]:py-24">
            <div className="flex flex-col gap-6 text-left max-w-2xl">
              <div className="space-y-2">
                <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                  <span className="text-blue-300 text-sm font-medium">👋 Hello, I'm</span>
                </div>
                <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.02em] bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Diego Cerda
                </h1>
                <h2 className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed">
                  Senior Data Scientist specializing in{' '}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                    Energy & AI Solutions
                  </span>
                </h2>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                7+ years driving innovation in solar, battery storage, geothermal, wind, and oil & gas industries through advanced analytics, machine learning, and predictive modeling.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <button 
                  onClick={scrollToProjects}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Projects
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <a 
                  href="/cv/Diego_Cerda_CV.pdf" 
                  download="Diego_Cerda_CV.pdf"
                  className="group border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-800/50 backdrop-blur-sm inline-block"
                >
                  <span className="flex items-center gap-2">
                    Download CV
                    <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}