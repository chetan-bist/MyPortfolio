import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero_Section from './component/Hero_Section'
import About_Section from './component/About_Section'
import Skill_Section from './component/Skills_Section'
import Project_Section from './component/Project_Section'
import Resources_Section from './component/Resources_Section'
import Contact_Section from './component/Contact_Section'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-[#f3f1ee] text-[#151412] font-['Neue_Haas_Grotesk_Display_Pro']">
        <Navbar></Navbar>
        <Hero_Section></Hero_Section>
        <About_Section></About_Section>
        <Skill_Section></Skill_Section>
        <Project_Section></Project_Section>
        <Resources_Section></Resources_Section>
        <Contact_Section></Contact_Section>
        <Footer></Footer>
      </div>
     
    </>
  )
}

export default App
