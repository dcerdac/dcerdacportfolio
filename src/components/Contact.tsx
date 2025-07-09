interface ContactProps {
  email: string
  setEmail: (email: string) => void
}

export default function Contact({ email, setEmail }: ContactProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Contact
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#3c4953] bg-[#1c2226] focus:border-[#3c4953] h-14 placeholder:text-[#9dadb8] p-[15px] text-base font-normal leading-normal"
            />
          </label>
        </div>
        <div className="flex px-4 py-3 justify-end">
          <button
            type="submit"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1990e5] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Send</span>
          </button>
        </div>
      </form>
    </>
  )
}