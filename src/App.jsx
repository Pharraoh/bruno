import { useState } from 'react'
import { AnimatePresence } from "framer-motion";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero.jsx'
import Experiences from './components/Experiences.jsx'
import Footer from './components/Footer.jsx'
import SkillsSection from './components/Skills.jsx'
import ToolsSection from './components/Tools.jsx'
import Projects from './components/Projects.jsx'
import Preloader from "./components/Preloader.jsx";
// import Shooter from './components/Shooter.jsx'
// import ProjectsCTA from './components/ProjectsCTA.jsx'
// import CoverflowCarousel from './components/CoverflowCarousel.jsx'

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>
      <Hero />
      <Experiences />
      <SkillsSection />
      <ToolsSection />
      <Projects />
      {/* <ProjectsCTA /> */}
      {/* <Shooter /> */}
      {/* <CoverflowCarousel /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
