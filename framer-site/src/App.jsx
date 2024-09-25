import { useRef, useState } from "react"
import {AnimatePresence, motion} from "framer-motion"
import NavBar from "./Components/NavBar"
import {HeroSection,ProjectsSection,SkillsSection,EducationSection,ContactSection} from "./Pages"
import "./App.scss"

const svgVariant={
  initial:{
    x:"-100vw",
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      type:"tween",
      duration:0.5,
    }
  }
}

const pathVariant={
  noCross:{
    rotateZ:0
  },
  lineOneCross:{
    y:6,
    rotateZ:135
  }
  ,
  lineTwoCross:{
    rotateZ:45
  },
  lineThreeFade:{
    scale:0
  }
}

function App(){
  
  const [openNav,setOpenNav]=useState(false)

  return(
    <div>

      <div className="svg-container" onClick={()=>setOpenNav(!openNav)} >
      <motion.svg className="svg-style" variants={svgVariant} initial="initial" animate="animate" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none">
      <motion.path variants={pathVariant} animate={openNav ? "lineThreeFade" : "noCross" } d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
      <motion.path variants={pathVariant} animate={openNav ? "lineTwoCross" : "noCross"} d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
      <motion.path variants={pathVariant} animate={openNav ? "lineOneCross" : "noCross"} d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
      </motion.svg>
      </div>

      <AnimatePresence>
      {openNav && <NavBar></NavBar>}
      </AnimatePresence>
      <motion.section id="HomePage">
        <HeroSection></HeroSection>
      </motion.section>
      <motion.section id="Projects">
        <ProjectsSection></ProjectsSection>
      </motion.section>
      <motion.section id="Skills">
        <SkillsSection></SkillsSection>
      </motion.section>
      <motion.section id="Education">
        <EducationSection></EducationSection>
      </motion.section>
      <motion.section id="Contact">
        <ContactSection></ContactSection>
      </motion.section>
    </div>
  )
}

export default App