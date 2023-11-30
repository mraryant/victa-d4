import "./Tokonomics.css"
import toko_img from "../../../assets/images/toko5.png"
import { useState } from "react";
 
import copy from "/src/assets/icons/copy (1).webp"
import bsc from "/src/assets/icons/bsc.webp"

const Tokonomics = () => {
  const [copied, setCopied] = useState(false);
  const text = "0x7f376fad327f428052ccad5d810bc04d2d2cba0d"

  const handleCopy = () => {
    navigator.clipboard.writeText('0x7f376fad327f428052ccad5d810bc04d2d2cba0d')  
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Hide the popup after 2 seconds
      })
      .catch(err => {
        console.error('Copy failed: ', err);
      });
  };
  return (
    <>
      <div id="toko-main-container">
        <div id="toko-head">
        <h1 id="toko-h" >TOKENOMICS</h1>
          <p id="toko-p">
            VICTA serves as a versatile medium for seamless utility payments, including mobile recharges, electricity bills, and fast tag transactions within the utility wallet Additionally, it plays a key role in the decentralized exchange (DEXA), enabling secure and efficient transactions, enhancing liquidity and platform functionality.</p>
        </div>
        <div id="toko-main" >
          <div id="toko-right">
            <h5>TOKEN UTILITY</h5>
            <div id="util-1">
              <span id="util-left"> Token Name</span>
              <span id="util-right"> VICTA </span>
            </div>
            <div id="util-1">
              <span id="util-left">  Symbol</span>
              <span id="util-right"> VCTA </span>
            </div>
            <div id="util-1">
              <span id="util-left">  Total Supply </span>
              <span id="util-right"> 450 million</span>
            </div>
            <div id="util-1">
              <span id="util-left">  Decimal</span>
              <span id="util-right"> 18 </span>
            </div>
            <div id="util-1">
              <span id="util-left">  Network </span>
              <span id="util-right">  BEP20 </span>
            </div>


          </div>
          <div id="toko-left">
            <img src={toko_img} alt="" />
          </div>
          
          {/* <div id="toko-right">
            <h5>TOKEN DISTRIBUTION</h5>
            <div className="toko-card" style={{ borderLeft: '9px solid #084DA5' }}>
              <h5> <span style={{ color:'#084DA5'}}> 35%</span> COMMUNITY</h5>
              
            </div>
            <div className="toko-card" style={{ borderLeft: '9px solid #057DCF' }}>
              <h5> <span style={{ color:'#057DCF'}}> 20%</span>BURNING</h5>
              
            </div>
            <div className="toko-card" style={{ borderLeft: '9px solid #01A7FE' }}>
              <h5> <span style={{ color:'#01A7FE'}}> 15%</span> FOUNDER</h5>
            
            </div>
            <div className="toko-card" style={{ borderLeft: '9px solid #01D5FF' }}>
              <h5> <span style={{ color:'#01D5FF'}}> 10%</span> TREASURY</h5>
              
            </div>
            <div className="toko-card" style={{ borderLeft: '9px solid #5BD5FF' }}>
              <h5> <span style={{ color:'#5BD5FF'}}> 10%</span> ADVISORS</h5>
              
            </div>
            <div className="toko-card" style={{ borderLeft: '9px solid #5BD5FF' }}>
              <h5> <span style={{ color:'#99E7F'}}> 10%</span>INVESTOR</h5>
              
            </div>
            
            
          </div> */}

          
        </div>

      </div>
      <div id="contract">

        <h5 style={{ color: 'white' }}>Contract Address</h5>
        <h3 style={{ color: 'white' }}>{text}</h3>
        <div id="contract-button">

          <button className="button-87" onClick={handleCopy}><span ><img src={copy} style={{ width: 25, height: 25, marginRight: 15, }} alt="" />
            Copy Address</span>
          </button>
          <button className="button-87" onClick={() => window.open('https://bscscan.com/address/0x7f376fad327f428052ccad5d810bc04d2d2cba0d', '_blank')}><span ><img src={bsc} style={{ width: 25, height: 25, marginRight: 15, }} alt="" />
            BSC SCAN</span>
          </button>
        </div>
        {copied && <div className="popup mt-3" style={{ color: "white", }}>Copied to clipboard!</div>}
      </div>
    </>
  )
}

export default Tokonomics