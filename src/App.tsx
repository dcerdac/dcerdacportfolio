import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {

  return (
    <div className="relative min-h-screen bg-[#111518] overflow-x-hidden font-[Space_Grotesk,Noto_Sans,sans-serif]">
      <Header />
      
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <Navigation />
    </div>
  )
}

export default App
