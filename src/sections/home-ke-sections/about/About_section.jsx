import About_card from "../../../components/About_card"
import "./About_section.css"
import ab1 from "../../../assets/images/ab1.svg"
import bg1 from "../../../assets/images/bg-blue.jpg"
 
import { motion } from "framer-motion"

const About_section = () => {
  return (
    <>
      <div id="about-main">
        <div id="ab-bg">
          <img src={bg1} alt="" />
      </div>
         
        <h1 id="about-h" >ABOUT <span style={{ color: 'white' }}> US</span> </h1>
        <div id="about-middle">
          <div id="about-mid-left">

            <About_card
              
              h3={`Genesis Marks The Commencement Of Our Ambitious Journey`}
              p1={`Founded in 2023, VICTA was born out of a collective passion for blockchain and a commitment to driving positive change. Our journey started with a simple idea to build a platform that not only leverages the power of blockchain but also enriches the lives of those who embrace it`}
               
            />
             
            <About_card
              h3={`Creativity fuels groundbreaking advancements`}
              p1={`We are relentless innovators, pushing the boundaries of what blockchain can achieve. Our commitment to continuous improvement fuels our quest for groundbreaking solutions that shape the future of decentralized technologies`}
              
            />
             
            <About_card
              h3={` Community-Centric Approach `}
              p1={`VICTA thrives on community engagement. We believe in the collective power of a vibrant and engaged community, Your feedback, ideas, and enthusiasm drive the evolution of VICTA, making it a shared endeavor`}
               
            />
            
          </div>

          <motion.div id="about-mid-right"
            initial={{
              top:"-30px",
              // scale: 1
            }}
            transition={{
              ease: "easeInOut",
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            whileInView={{
              top: "0px",
               
            }}
          >

            
            <img id="img2" src={ab1} alt="" />
          </motion.div>

        </div>

       
        
      </div>
    </>
  )
}

export default About_section