import "./heroSection.scss"
import {motion} from "framer-motion"
import {ReactTyped} from "react-typed"
import { bioDetails } from "../utils/constant"

const sectionVariants={
    hiddenLeft:{
        x: "-100vw"
    },
    hiddenRight:{
        x:"100vw"
    },
    visible:{
        x: 0,
        transition:{
            type:"tween",
            duration:0.5
        }
    }
}

const textVariant={
    initial:{
        x:"-100vw"
    }
    ,
    slide:{
        x:"100vw",
        transition:{
            x:{
            type:"tween",
            repeat:Infinity,
            duration:15,
            ease:"linear"
           }
        }
    }
}

const buttonVariant={
    hover:{
        scale:1.1,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)"
    }
}   


function HeroSection(){
    return(
        <div className="hero-container">
            <motion.div variants={sectionVariants} initial="hiddenLeft" animate="visible" className="left-section">
                <h2 className="name-header">{bioDetails.name}</h2>
                <h1 className="role-header">
                    I am a <ReactTyped strings={bioDetails.role} typeSpeed={100} backSpeed={60} loop></ReactTyped>
                </h1>
                <div className="description">{bioDetails.description}</div>
                <div className="home-section-button-container">
                    <motion.button variants={buttonVariant} whileHover="hover" onClick={()=>window.open(bioDetails.resumeUrl,"_blank")}>Check Resume</motion.button>
                    <motion.button variants={buttonVariant} whileHover="hover" onClick={()=>window.open(bioDetails.linkedInUrl,"_blank")}>LinkedIn</motion.button>
                </div>
            </motion.div>
            <motion.div className="right-section" variants={sectionVariants} initial="hiddenRight" animate="visible">
                <img src="/linkedin-profile-modified.png" alt="profile-image"/>
            </motion.div>
            <motion.div className="background-text-slider" variants={textVariant} initial="initial" animate="slide">Crafting Innovative Web Solutions</motion.div>
        </div>
    )
}

export default HeroSection