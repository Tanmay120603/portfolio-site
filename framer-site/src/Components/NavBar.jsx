import {motion} from "framer-motion"
import "./navBar.scss"

const navBarVariant={
    hidden:{
        scale:0
    },
    visible:{
        originX:0,
        originY:0,
        scale:1,
        transistion:{
            ease:"easeInOut"
        }          
    },
    exit:{
       scale:0
    }
}

const navItemVariant={
    hover:{
        scale:1.1,
    }
}


function NavBar(){
    const navItems=["HomePage","Projects","Skills","Education","Contact"]
    return(
        <motion.div className="navbar-container" variants={navBarVariant} initial="hidden" animate="visible" exit="exit">
            <ul>
                {navItems.map(navItem=><motion.a href={`#${navItem}`} variants={navItemVariant}  whileHover="hover">{navItem}</motion.a>)}
            </ul> 
        </motion.div>
    )
}

export default NavBar