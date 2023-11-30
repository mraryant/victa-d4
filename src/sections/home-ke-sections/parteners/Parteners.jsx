import "./Parteners.css"
 
import partener1 from "../../../assets/logo/pr1.svg"
import partener2 from "../../../assets/logo/pr2.png"
import partener3 from "../../../assets/logo/pr3.png"
import partener4 from "../../../assets/logo/pr4.svg"
 

const Parteners = () => {
  

  return (
    <>
    <div id="parteners-main" >
        <h1 id="H1">STRATEGIC <span style={{ color:'rgb(247, 185, 27)'}} >PARTENERS</span>  </h1>  
    <div id="parteners-main2" >
        <img src={partener1} alt="" />
        <img src={partener2} alt="" />
        <img src={partener3} alt="" />
        <img src={partener4} alt="" />
        
    </div>
    </div>
    </>
  );

 
}

export default Parteners