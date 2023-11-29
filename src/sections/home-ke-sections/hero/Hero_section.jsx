import "./Hero_section.css"
// import coin from "../../../assets/logo/VICTA COIN-1-02.png"
import Navbar from "..//navbar/Navbar"
import bghome from "../../../assets/logo/e3_aMmiWCy6.mp4"
// import { Tilt } from 'react-tilt'
// import { motion } from "framer-motion"

const Hero_section = () => {

  // const defaultOptions = {
  //   reverse: false,  // reverse the tilt direction
  //   max: 35,     // max tilt rotation (degrees)
  //   perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 1000,   // Speed of the enter/exit transition
  //   transition: true,   // Set a transition on enter/exit.
  //   axis: null,   // What axis should be disabled. Can be X or Y.
  //   reset: true,    // If the tilt effect has to be reset on exit.
  //   easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  // }








  return (
    <>
      <div id="hero-main">
        <video id="v1" autoPlay muted loop src={bghome} > </video>

        <Navbar />

        <div id="hero-left">


          <h1> <div>Get Ready To Fly With<span id="victa"> Victa </span> </div>
            
                
             
          </h1>

          <h6>At the core of VICTA is a mission to democratize access to blockchain, making it
            intuitive, user-friendly, and relevant to everyday life. We aim to provide a
            comprehensive ecosystem that goes beyond the traditional boundaries of
            decentralized platforms </h6>
          

          <div id="hero-buttons">

            <button className="button-87 " type="submit" style={{ fontSize: 14 }}> <a style={{ textDecoration: 'none', color: 'white' }} target="block" href="https://presale.victacapitals.com/">Buy Tokens</a></button>
            <button className="button-87 " type="submit" style={{ fontSize: 14 }}>Whitepaper</button>
          </div>

          
        </div>

        


        {/* <div id="hero-right">
           
          <Tilt options={defaultOptions} style={{ height: 250, width: 250 }} >
            <img id="right_img" src={coin} alt="" />
          </Tilt>
        </div> */}

        <div id="hero-gredient">
        </div>

      </div>
    </>
  )
}

export default Hero_section