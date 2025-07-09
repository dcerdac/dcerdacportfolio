export default function Projects() {
  const projects = [
    {
      title: "Solar Energy Optimization",
      description: "Developed a model to optimize solar panel placement and energy output.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnq9yo4FCdg2Lt1bBDunJANJMp1y_akHMocR5qDEG8Q3iqeURyt9OdMofInkgQewZNGWdgEVJkzC-mm0NInHL7jkbmuA5yh4yjS6jr_k27n_U-_5sTLW2F8vl0e2XqzLbplbgIs-27nqMQoZGBILSlrZyKsDO2_-tPbofrQclPF5iZ2twdeY7IjDs5htZJqo7-mJ03aJmawbpCJgThk-BZ2r9M7RXZx0KUYDlkbfizwDwHuNraCuoWaobVkiyfiNcNATusfJ-nyXg"
    },
    {
      title: "Wind Power Forecasting",
      description: "Created a forecasting model for wind power generation using weather data.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-R9XXIeUOctcDB0cKXIF4prXYgdedfMxt0X11v9dzDwdmKYJ_vUDTZm4tlj66XCjzcqcJXn6-cyv2ln2dIAaw_aziSAl8Lg2bWX2mCEYjjHoPhu1y6ujtwNA9JyZ7BNH1_Dhg7FA5Mx5YJnbC-wZcrIG70V0jywsSwrRJZvADF2AhA4OxlnIHgXDx37mOnYcYezqD3ek-kd4NoR4O-2N9yhhIYhCa5gVsMIRIdGdpeC1tVgM6U09BrAwCYATGDCdYprVpTkHlEBE"
    },
    {
      title: "Smart Grid Analytics",
      description: "Analyzed smart grid data to identify patterns and improve energy efficiency.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYZrMxh6M02eF5qZTnG1UIqGrOwsZhdVjj8oP9TPSGipVDDbCgid6kNPdiFfZfXgQX4nv2986TNu5xmV_t3zhkamN1fytAqT8vyThH5lcQgtU4_IWpXwUr7n_ZQpsnsu84wyaNwGX4BvaFnLg7i0IguWZ6Ont0T1SZvnMvvMLYHnSvGyFgEptmv_-45Q54WsntvEz1IaHIF_ABeUhtrByk6pJ8-1ttLf8BJexT3joHFi_SkV2YzVqIES9uAFovhtSzlIt_p_8n6Uc"
    }
  ]

  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Projects
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {projects.map((project, index) => (
            <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">{project.title}</p>
                <p className="text-[#9dadb8] text-sm font-normal leading-normal">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}