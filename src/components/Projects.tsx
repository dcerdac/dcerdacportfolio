export default function Projects() {
  const projects = [
    {
      title: "EcoVentus - Drone Detection System",
      description: "2nd Place Winner at Huawei Developer Competition. Developed a wildfire drone detection system using computer vision and AI for environmental monitoring.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnq9yo4FCdg2Lt1bBDunJANJMp1y_akHMocR5qDEG8Q3iqeURyt9OdMofInkgQewZNGWdgEVJkzC-mm0NInHL7jkbmuA5yh4yjS6jr_k27n_U-_5sTLW2F8vl0e2XqzLbplbgIs-27nqMQoZGBILSlrZyKsDO2_-tPbofrQclPF5iZ2twdeY7IjDs5htZJqo7-mJ03aJmawbpCJgThk-BZ2r9M7RXZx0KUYDlkbfizwDwHuNraCuoWaobVkiyfiNcNATusfJ-nyXg",
      tags: ["Computer Vision", "AI", "Drone Detection", "Python"],
      status: "Completed",
      github: "https://github.com/AzulRK22/queenDrones"
    },
    {
      title: "NBC Universal Monitoring System",
      description: "Built a computer vision-based monitoring system with automated DRM sampling for NBC Universal, improving detection of video and audio issues.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-R9XXIeUOctcDB0cKXIF4prXYgdedfMxt0X11v9dzDwdmKYJ_vUDTZm4tlj66XCjzcqcJXn6-cyv2ln2dIAaw_aziSAl8Lg2bWX2mCEYjjHoPhu1y6ujtwNA9JyZ7BNH1_Dhg7FA5Mx5YJnbC-wZcrIG70V0jywsSwrRJZvADF2AhA4OxlnIHgXDx37mOnYcYezqD3ek-kd4NoR4O-2N9yhhIYhCa5gVsMIRIdGdpeC1tVgM6U09BrAwCYATGDCdYprVpTkHlEBE",
      tags: ["Computer Vision", "DRM", "Monitoring", "Microservices"],
      status: "Completed"
    },
    {
      title: "BESS Forecasting & Monitoring",
      description: "Developed advanced Battery Energy Storage System forecasting using BMS data with ERCOT and CAISO market integration for voltage anomaly detection.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYZrMxh6M02eF5qZTnG1UIqGrOwsZhdVjj8oP9TPSGipVDDbCgid6kNPdiFfZfXgQX4nv2986TNu5xmV_t3zhkamN1fytAqT8vyThH5lcQgtU4_IWpXwUr7n_ZQpsnsu84wyaNwGX4BvaFnLg7i0IguWZ6Ont0T1SZvnMvvMLYHnSvGyFgEptmv_-45Q54WsntvEz1IaHIF_ABeUhtrByk6pJ8-1ttLf8BJexT3joHFi_SkV2YzVqIES9uAFovhtSzlIt_p_8n6Uc",
      tags: ["Energy Storage", "Forecasting", "BMS", "Market Data"],
      status: "Completed"
    },
    {
      title: "EV Charging Station Analytics",
      description: "Performed Root Cause Analysis on OCPP data from ABB and Schneider Electric EV charging stations, using NLP to reduce system incidents by 24%.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnq9yo4FCdg2Lt1bBDunJANJMp1y_akHMocR5qDEG8Q3iqeURyt9OdMofInkgQewZNGWdgEVJkzC-mm0NInHL7jkbmuA5yh4yjS6jr_k27n_U-_5sTLW2F8vl0e2XqzLbplbgIs-27nqMQoZGBILSlrZyKsDO2_-tPbofrQclPF5iZ2twdeY7IjDs5htZJqo7-mJ03aJmawbpCJgThk-BZ2r9M7RXZx0KUYDlkbfizwDwHuNraCuoWaobVkiyfiNcNATusfJ-nyXg",
      tags: ["OCPP", "NLP", "EV Charging", "Root Cause Analysis"],
      status: "Completed"
    },
    {
      title: "Wildfire Drone Detection",
      description: "OpenAI Hackathon Latinoamerica project for wildfire detection using drone technology and machine learning algorithms.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-R9XXIeUOctcDB0cKXIF4prXYgdedfMxt0X11v9dzDwdmKYJ_vUDTZm4tlj66XCjzcqcJXn6-cyv2ln2dIAaw_aziSAl8Lg2bWX2mCEYjjHoPhu1y6ujtwNA9JyZ7BNH1_Dhg7FA5Mx5YJnbC-wZcrIG70V0jywsSwrRJZvADF2AhA4OxlnIHgXDx37mOnYcYezqD3ek-kd4NoR4O-2N9yhhIYhCa5gVsMIRIdGdpeC1tVgM6U09BrAwCYATGDCdYprVpTkHlEBE",
      tags: ["Wildfire Detection", "OpenAI", "Machine Learning", "Hackathon"],
      status: "Completed",
      github: "https://github.com/dcerdac/keepnai"
    },
    {
      title: "Energy Efficiency Prediction",
      description: "M.Sc. Dissertation: Developed ML models (SVM, Decision Tree, MLP, Regression) for predicting energy efficiency in buildings using advanced statistical techniques.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYZrMxh6M02eF5qZTnG1UIqGrOwsZhdVjj8oP9TPSGipVDDbCgid6kNPdiFfZfXgQX4nv2986TNu5xmV_t3zhkamN1fytAqT8vyThH5lcQgtU4_IWpXwUr7n_ZQpsnsu84wyaNwGX4BvaFnLg7i0IguWZ6Ont0T1SZvnMvvMLYHnSvGyFgEptmv_-45Q54WsntvEz1IaHIF_ABeUhtrByk6pJ8-1ttLf8BJexT3joHFi_SkV2YzVqIES9uAFovhtSzlIt_p_8n6Uc",
      tags: ["Machine Learning", "Energy Efficiency", "SVM", "Statistical Analysis"],
      status: "Completed",
      github: "https://github.com/dcerdac/DissertationCode"
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
                {project.github ? (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 hover:to-purple-600/40 text-white py-3 px-4 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group/btn inline-block text-center"
                  >
                    <span className="flex items-center justify-center gap-2">
                      View on GitHub
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <button className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 hover:to-purple-600/40 text-white py-3 px-4 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group/btn">
                    <span className="flex items-center justify-center gap-2">
                      View Details
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}