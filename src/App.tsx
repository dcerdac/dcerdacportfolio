import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111518] justify-between overflow-x-hidden font-[Space_Grotesk,Noto_Sans,sans-serif]">
      <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact email={email} setEmail={setEmail} />
      </div>
      <Navigation />
    </div>
  )
}

export default App
