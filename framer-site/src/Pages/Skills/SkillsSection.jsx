import "./skillsSection.scss"
import { skillsDetails } from "../../utils/constant"
import {motion} from "framer-motion"

const skillBoxVariant={
    upDownAnimation:{
        y: [0,20,0],
        transition:{
            y:{
            repeat:Infinity,
            duration:2
            }
        }
    },
}

function SkillsSection(){
 
    return(
        <div className="skills-container">
            <h1 className="skills-header">Skills</h1>
            <div className="wrapper">
                {skillsDetails.map(skillsDetail=>
                   <motion.div whileInView="upDownAnimation" variants={skillBoxVariant}  className="skill-box">
                    <h2 className="header-domain">{skillsDetail.domainName}</h2>
                    <div className="skills-content">
                      {skillsDetail.skills.map(skill=><div><img src={skill.skillLogo} alt={`${skill.skillName+"-logo"}`}/>
                        <span>{skill.skillName}</span>
                        </div>
                     )
                      } 
                    </div>
                   </motion.div>     
                )}
                </div>
        </div>
    )
}

export default SkillsSection