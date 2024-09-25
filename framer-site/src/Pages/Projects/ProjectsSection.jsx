import { useScroll,motion, useTransform, useMotionValue } from "framer-motion"
import { projectDetails } from "../../utils/constant"
import "./projectsSection.scss"
import {useRef} from "react"
import Project from "../../Components/Project"

function ProjectsSection(){
    const targetRef=useRef()
    const {scrollYProgress}=useScroll({target:targetRef,offset:["start start","end center"]})
    const scaleX=useTransform(scrollYProgress,[0,1],[1,0])

    return(
        <div className="projects-section-container">
            <div className="projects-section-header">
                <h1>Featured Projects</h1>
                <motion.div className="progress-bar" style={{scaleX}}>
                </motion.div>
            </div>
            <motion.div className="projects-container" ref={targetRef}>
                {projectDetails.map(project=><Project {...project}></Project>)}
            </motion.div>
        </div>
    )
}

export default ProjectsSection