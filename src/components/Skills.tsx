export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "R", level: 85, icon: "📊" },
        { name: "SQL", level: 90, icon: "🗃️" },
        { name: "JavaScript", level: 75, icon: "⚡" }
      ]
    },
    {
      category: "Data Science & ML",
      skills: [
        { name: "Machine Learning", level: 92, icon: "🤖" },
        { name: "Deep Learning", level: 85, icon: "🧠" },
        { name: "Data Visualization", level: 90, icon: "📈" },
        { name: "Statistical Analysis", level: 88, icon: "📊" }
      ]
    },
    {
      category: "Tools & Frameworks",
      skills: [
        { name: "TensorFlow", level: 80, icon: "🔥" },
        { name: "PyTorch", level: 75, icon: "🔮" },
        { name: "Pandas", level: 95, icon: "🐼" },
        { name: "Apache Spark", level: 70, icon: "⚡" }
      ]
    },
    {
      category: "Energy Domain",
      skills: [
        { name: "Renewable Energy", level: 90, icon: "🌱" },
        { name: "Smart Grid", level: 85, icon: "🔌" },
        { name: "Energy Forecasting", level: 88, icon: "🔮" },
        { name: "Grid Analytics", level: 80, icon: "📊" }
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
              { title: "AWS Certified ML Specialist", issuer: "Amazon", year: "2023" },
              { title: "Google Cloud Professional Data Engineer", issuer: "Google", year: "2022" },
              { title: "Energy Analytics Certificate", issuer: "Stanford", year: "2021" }
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