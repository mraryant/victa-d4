import "./style/Roadmap_card.css"

const Roadmap_card = ( prop) => {
    // const background = {
    //     backgroundColor: prop.bg,
    // }
  return (
      <div id="roadmap-card"  >
          <h6>{prop.h4}</h6>
          
          {/* <div id="image_div"  >
              <img src={prop.image} alt="" />
          </div> */}
          
          <div id="r-mid">
              
          <h4>{ prop.h4_2}</h4>
          <p>{prop.p}</p>
          </div>
      </div>
  )
}

export default Roadmap_card