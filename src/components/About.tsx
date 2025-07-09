export default function About() {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "3", label: "Energy Companies" },
    { number: "15%", label: "Avg. Efficiency Gain" }
  ];

  return (
    <section className="py-20 px-4 bg-[#111518] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Me</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am a passionate data scientist with a deep focus on revolutionizing the energy sector through advanced analytics and machine learning. My expertise spans across renewable energy optimization, smart grid analysis, and predictive modeling.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With a strong background in mathematics and computer science, I bridge the gap between complex energy systems and actionable business insights. I thrive on transforming raw data into strategic solutions that drive sustainable energy practices.
              </p>
            </div>
            
            {/* Expertise Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Machine Learning & AI",
                "Energy Systems Analysis",
                "Data Visualization",
                "Predictive Modeling",
                "Renewable Energy",
                "Smart Grid Technology"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-2">Let's Work Together</h3>
              <p className="text-gray-400 text-sm mb-4">
                I'm always excited to collaborate on innovative energy projects and data-driven solutions.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}