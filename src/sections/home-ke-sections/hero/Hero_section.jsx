import "./Hero_section.css"
import coin from "../../../assets/images/hero-bg.png"
import Navbar from "..//navbar/Navbar"
import bghome from "../../../assets/logo/e3_aMmiWCy6.mp4"
import whitepaper from "../../../assets/images/VICTA WHITEPAPER.pdf"
import Headroom from "react-headroom"
 
// import { motion } from "framer-motion"

const Hero_section = () => {
 
  return (
    <>
          <div id="navbar-hero">
            <Headroom>
                <Navbar/>
            </Headroom>
          </div>
      <div id="hero-main">
        <video id="v1" autoPlay muted loop src={bghome} > </video>


        <div id="hero-left">


          <h1>
            <div>
              <span id="victa"> Victa </span>
              <span className="sm-t"> Is  First </span>
              <span className="lg-t"> POE  </span>
              <div>
              <span id="poe" className="sm-t"> (Proof Of Energy) </span>
              </div>
              <span className="lg-t"> Protocol  </span>
            </div>
          </h1>

          <h6>At the core of VICTA is a mission to democratize access to blockchain, making it
            intuitive, user-friendly, and relevant to everyday life. We aim to provide a
            comprehensive ecosystem that goes beyond the traditional boundaries of
            decentralized platforms </h6>


          <div id="hero-buttons">

            <button className="button-87 " type="submit" style={{ fontSize: 14 }}> <a style={{ textDecoration: 'none', color: 'white' }} target="block" href="https://presale.victacapitals.com/">Buy Tokens</a></button>
            <button className="button-87" onClick={() => { window.open(whitepaper) }} type="download" style={{ fontSize: 14 }} > Whitepaper </button>

          </div>
        </div>




        <div id="hero-right">
           
          
            <img id="right_img" src={coin} alt="" />
           
        </div>

        <div id="hero-gredient">
        </div>

      </div>
    </>
  )
}

export default Hero_section