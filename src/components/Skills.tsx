export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "SQL", level: 90, icon: "🗃️" },
        { name: "JavaScript", level: 80, icon: "⚡" },
        { name: "Java", level: 75, icon: "☕" }
      ]
    },
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", level: 95, icon: "🤖" },
        { name: "TensorFlow", level: 85, icon: "🔥" },
        { name: "PyTorch", level: 80, icon: "🔮" },
        { name: "YOLO", level: 85, icon: "👁️" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 90, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 80, icon: "⚙️" },
        { name: "MLOps", level: 85, icon: "🚀" }
      ]
    },
    {
      category: "Data & Analytics",
      skills: [
        { name: "Pandas", level: 95, icon: "🐼" },
        { name: "NumPy", level: 90, icon: "🔢" },
        { name: "Plotly", level: 85, icon: "📊" },
        { name: "Jupyter", level: 90, icon: "📓" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0a0e12] to-[#111518] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and domain expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  {categoryIndex + 1}
                </div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-500 group-hover:to-purple-500"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `skillBar 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "HCIA-IA", issuer: "Huawei", year: "2024" },
              { title: "Climatebase Fellowship", issuer: "Climatebase", year: "2025" },
              { title: "EcoVentus - 2nd Place", issuer: "Huawei Developer Competition", year: "2025" }
            ].map((cert, index) => (
              <div key={index} className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="text-white font-semibold mb-1">{cert.title}</h4>
                <p className="text-gray-400 text-sm">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}