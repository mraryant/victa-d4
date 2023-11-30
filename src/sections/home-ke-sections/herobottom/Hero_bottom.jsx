 
import "./Hero_bottom.css"
import {motion} from "framer-motion"
 

const Hero_section = () => {
  return (
    <div id="hero-bottom-main">
      {/* <div id="hero-head">
        <h1>Expertise you can trust </h1>
        <p>VICTA represents a groundbreaking initiative designed to address the challenges and limitations of traditional systems</p>
      </div> */}
      
       

      <div id="hero-bottom-lower">
  
      <div id="hero-bottom-right">
          <motion.div
            className='usecase1'
            initial={{
              opacity: 0,
              x: 200
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              duration: 20,
            }}
            id="h-b-r-card">
            <h2>Mission </h2>
            <p>At the core of VICTA is a mission to democratize access to blockchain, making it intuitive, user-friendly, and relevant to everyday life. We aim to provide a comprehensive ecosystem that goes beyond the traditional boundaries of decentralized platforms</p>
          </motion.div>
          

          <motion.div
            className='usecase1'
            initial={{
              opacity: 0,
              x: 200
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              duration: 20,
            }}
            id="h-b-r-card">
            <h2>Security and Compliance </h2>
            <p>Security is non-negotiable, We operate steadfastly committed to the highest security and legal compliance standards Smart contract audits, encryption protocols, and adherence to regulatory frameworks underscore our dedication to providing a safe environment for our users</p>
         </motion.div>
          <motion.div
            className='usecase1'
            initial={{
              opacity: 0,
              x: 200
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              duration: 20,
            }}
            id="h-b-r-card">
            <h2>Community-Centric Approach </h2>
            <p>VICTA thrives on community engagement. We believe in the collective power of a vibrant and engaged community, Your feedback, ideas, and enthusiasm drive the evolution of VICTA, making it a shared endeavor</p>
         </motion.div>
      </div>
        </div>

      
    </div>
  )
}

export default Hero_section