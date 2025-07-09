export default function Projects() {
  const projects = [
    {
      title: "Solar Energy Optimization",
      description: "Developed a model to optimize solar panel placement and energy output using machine learning algorithms and geographic data analysis.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnq9yo4FCdg2Lt1bBDunJANJMp1y_akHMocR5qDEG8Q3iqeURyt9OdMofInkgQewZNGWdgEVJkzC-mm0NInHL7jkbmuA5yh4yjS6jr_k27n_U-_5sTLW2F8vl0e2XqzLbplbgIs-27nqMQoZGBILSlrZyKsDO2_-tPbofrQclPF5iZ2twdeY7IjDs5htZJqo7-mJ03aJmawbpCJgThk-BZ2r9M7RXZx0KUYDlkbfizwDwHuNraCuoWaobVkiyfiNcNATusfJ-nyXg",
      tags: ["Python", "Machine Learning", "GIS", "Solar Energy"],
      status: "Completed"
    },
    {
      title: "Wind Power Forecasting",
      description: "Created a forecasting model for wind power generation using weather data and deep learning techniques to predict energy output.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-R9XXIeUOctcDB0cKXIF4prXYgdedfMxt0X11v9dzDwdmKYJ_vUDTZm4tlj66XCjzcqcJXn6-cyv2ln2dIAaw_aziSAl8Lg2bWX2mCEYjjHoPhu1y6ujtwNA9JyZ7BNH1_Dhg7FA5Mx5YJnbC-wZcrIG70V0jywsSwrRJZvADF2AhA4OxlnIHgXDx37mOnYcYezqD3ek-kd4NoR4O-2N9yhhIYhCa5gVsMIRIdGdpeC1tVgM6U09BrAwCYATGDCdYprVpTkHlEBE",
      tags: ["Deep Learning", "Time Series", "Weather Data", "TensorFlow"],
      status: "In Progress"
    },
    {
      title: "Smart Grid Analytics",
      description: "Analyzed smart grid data to identify patterns and improve energy efficiency through advanced data mining and visualization techniques.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYZrMxh6M02eF5qZTnG1UIqGrOwsZhdVjj8oP9TPSGipVDDbCgid6kNPdiFfZfXgQX4nv2986TNu5xmV_t3zhkamN1fytAqT8vyThH5lcQgtU4_IWpXwUr7n_ZQpsnsu84wyaNwGX4BvaFnLg7i0IguWZ6Ont0T1SZvnMvvMLYHnSvGyFgEptmv_-45Q54WsntvEz1IaHIF_ABeUhtrByk6pJ8-1ttLf8BJexT3joHFi_SkV2YzVqIES9uAFovhtSzlIt_p_8n6Uc",
      tags: ["Data Mining", "Visualization", "Smart Grid", "Analytics"],
      status: "Completed"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-[#111518] to-[#0a0e12]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work in data science and energy analytics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-lg border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 hover:to-purple-600/40 text-white py-3 px-4 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group/btn">
                  <span className="flex items-center justify-center gap-2">
                    View Details
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}