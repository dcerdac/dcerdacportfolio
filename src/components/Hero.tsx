export default function Hero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMYeysC0HSn4NLHLwqvVJt63vT1qEwTO5GKzd9LxqneeZcOMlO9G9UaDgyRTz4Jt22C8yTEcB_Jjyx8po3FecZD9MiReP-kPvrSZuEf2KKg8zNH3UHYQkVTqA0mzyouH17lhQB6n7w8nWWrBPOMXkXYOgpH2qPfVtVJNXr1U-DDYlFyNzzGi0mVt-3C9YrVlbC1aWMe25P90P-eIiPclfAwo3un2XULe0VQWgZvPPUB3E5He7CZWeIJCI9mvq5LQtKFTX_XWIfK6U")'
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Diego Cerda
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Data Scientist in the Energy Industry
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1990e5] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">View Projects</span>
          </button>
        </div>
      </div>
    </div>
  )
}