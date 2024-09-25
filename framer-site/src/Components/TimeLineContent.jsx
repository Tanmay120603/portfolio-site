import "./timeLineContent.scss"
import { motion } from "framer-motion"

const timeLineItemVariant={
    hidden:{
        scale:0
    },
    visible:{
        scale:1,
        transition:{
            type:"spring",
            duration:0.8
        }
    }
}

function TimeLineContent({logo,name,course,index,durationFrom,durationTo,grade,description}){

    return(
        <motion.div variants={timeLineItemVariant} initial="hidden" whileInView="visible" className="timeline-content-container">
                <div className={`arrow-pointer ${index%2 ? "pointer-right" : "pointer-left"}`}></div>
                <div className="timeline-content-header">
                    <div className="logo-container">
                        <img src={logo} alt={name}/>
                    </div>
                    <div className="text-container">
                        <h2>{name}</h2>
                        <p>{course}</p>
                        <span>{durationFrom} - </span>
                        <span>{durationTo}</span>
                    </div>
            </div>
            <div className="timeline-content-grade-desc">
                <h2>Grade: {grade}</h2>
                <p>{description}</p>
            </div>
        </motion.div>
    )
}

export default TimeLineContent