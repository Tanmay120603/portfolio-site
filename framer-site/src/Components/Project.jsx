import { useEffect, useRef } from "react"
import "./project.scss"
import {motion, useAnimate, useInView, useScroll, useTransform} from "framer-motion"

const buttonVariant={
    hover:{
        scale:1.1,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(146,144,195)"
    }
}

function Project({name,description,images,liveUrl,cursorPositions}){
    const targetRef=useRef()
    const {scrollYProgress}=useScroll({target:targetRef,offset:["start end","end start"]})
    const yImagePosition=useTransform(scrollYProgress,[0,1],["0vh","-100vh"])
    const yTextPosition=useTransform(scrollYProgress,[0,1],["0vh","-130vh"])
    const [scope,animate]=useAnimate()
    const isInView=useInView(scope,{amount:1,once:true})

    useEffect(()=>{
        async function animateImageIn(){
            for(let i=0;i<cursorPositions.length;i++){
                await animate("svg",{opacity:1,right:cursorPositions[i].right,bottom:cursorPositions[i].bottom},{duration:0.5})
                await animate(`#image${i}`,{opacity:0},{duration:0.2})
                await animate(`#image${i+1}`,{opacity:1},{duration:0.5})
            }
            await animate("svg",{opacity:0},{duration:1})
            await animate(`#image${cursorPositions.length}`,{opacity:0},{duration:0.2})
            await animate(`#image0`,{opacity:1},{duration:0.5})
        }

        if(isInView){
            animateImageIn()
        }
    },[isInView])

    return(
        <div className="project-container">
            <motion.div ref={targetRef} className="project-target">
            <motion.div className="project-left-section" ref={scope} style={{y:yImagePosition}}>
                {images.map((image,index)=><img id={"image"+index} src={image} alt={name}></img>)}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="30px" height="30px" baseProfile="basic"><rect width="24" height="53" x="65.192" y="58.285" opacity=".35" transform="rotate(-33.332 77.187 84.781)"/><rect width="24" height="53" x="62.994" y="54.943" fill="#0037ff" transform="rotate(-33.332 74.989 81.44)"/><polygon points="105.926,59.869 65.362,70.986 39.085,103.827 28.547,15.007" opacity=".35"/><polygon fill="#52afff" points="105.392,54.869 64.829,65.986 38.551,98.827 28.014,10.007"/></svg>
            </motion.div>
            <motion.div className="project-right-section" style={{y:yTextPosition}}>
                <h1>{name}</h1>
                <p>{description}</p>
                <motion.button variants={buttonVariant} whileHover="hover" onClick={()=>window.open(liveUrl,"_blank")}>Check Demo</motion.button>
            </motion.div>
            </motion.div>
        </div>
    )
}

export default Project