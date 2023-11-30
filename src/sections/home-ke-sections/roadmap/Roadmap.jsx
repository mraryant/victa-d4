

 
import './Roadmap.css';  

import RoadmapCard from '../../../components/Roadmap_card';
import romin from "../../../assets/images/robmap-mini.svg"
import romax from "../../../assets/images/roadmap-max.svg"
import romob from "../../../assets/images/mobile-roadmap.svg"
 


 



export default function Roadmap() {

  return (
    <>
      <div id="roadmap-main">

        <div id="roadmap-head">

          <h1 style={{ textAlign: "center"}}>ROADMAP</h1>
          <p>
            This involves strategic planning to ensure {"VICTA's"} continual evolution, promoting growth, and integrating innovations to maintain a dynamic and thriving ecosystem that meets evolving user needs.</p>
        </div>

        <div className="roadmap-inner">

          <div id="ro-top">
            <div className="ro-bottomtop">
              <RoadmapCard
                bg="#E3EDFF"
                h4="PHASE - 1 "
                 
                h4_2=" Utility Wallet Launch"
                p="Mobile, electricity, Fastag, water, gas, and corporation bill recharge. Flight, bus booking, insurance renewal, and solar panel services available."
              >One</RoadmapCard>


              <RoadmapCard
                bg="#D9EAE8"
                h4="PHASE - 2"
                 
                h4_2=" Cashback Utility Integration "
                p="E-commerce: clothing, shoes, beauty, grocery, gadgets, home appliances, decor. Events, insurance, hotels, tours, gaming, fintech, cashback services."
              >One</RoadmapCard>


              <RoadmapCard
                bg="#F2E7E4"
                h4="PHASE - 3 "
                
                h4_2="EV App Development"
                p="EV App launched with token redemption and unit purchases. One-stop solution for electric bike users, including maintenance services."
              >One</RoadmapCard>
            </div>

            <img src={romax} alt="" />

            <div className="ro-bottom-bottom">
              <RoadmapCard
                bg="#E3EDFF"
                h4="PHASE - 4"
                 
                h4_2="Short Videos Platform"
                p="Short videos platform launch with viewer channel subscriptions and reward tokens for user engagement."
              >One</RoadmapCard>

              <RoadmapCard
                bg="#D9EAE8"
                h4="PHASE - 5"
                
                h4_2=" Metaverse OTT Platform"
                p="Local market, gaming, short storytelling, and motivational content services introduced, seamlessly integrated with the immersive metaverse experience."
              >One</RoadmapCard>
            </div>

          </div>

          <div id="ro-bottom">
            <div className="ro-bottomtop">
              <RoadmapCard
                bg="#F2E7E4"
                h4="PHASE - 6"
                
                h4_2="Metaverse Expansion"
                p=" Metaverse development featuring VR, AR, portals, gaming, and adventure parks. Seamless integration of adventure parks enhances the immersive virtual experience."
              >One</RoadmapCard>
              

            </div>        
            <img id='' src={romin} alt="" />
            <div className="ro-bottom-bottom">
              <RoadmapCard
                bg="#E3EDFF"
                h4="PHASE - 7"
                 
                h4_2=" Dating App Launch"
                p="Dating app launch with peer-to-peer services and a bucket list feature for shared interests. Group chats, family get-togethers, and metaverse travel services integrated."
              >One</RoadmapCard>

              <RoadmapCard
                bg="#D9EAE8"
                h4="PHASE - 8"
                 
                h4_2="Green Energy Blockchain"
                p="Blockchain powered by renewable energy introduced, hosting green energy projects with reduced fees for a sustainable and eco-friendly approach."
              >One</RoadmapCard>
            </div>
          </div>
 
        </div>



        <div id="roadmap-mobile">
          <img src={romob} alt="" />
          <div id="roadmap-path">
            <RoadmapCard
              bg="#E3EDFF"
              h4="PHASE - 1 "
               
              h4_2=" Utility Wallet Launch"
              p="Mobile, electricity, Fastag, water, gas, and corporation bill recharge. Flight, bus booking, insurance renewal, and solar panel services available."
            >One</RoadmapCard>


            <RoadmapCard
              bg="#D9EAE8"
              h4="PHASE - 2"
               
              h4_2=" Cashback Utility Integration "
              p="E-commerce: clothing, shoes, beauty, grocery, gadgets, home appliances, decor. Events, insurance, hotels, tours, gaming, fintech, cashback services."
            >One</RoadmapCard>


            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 3 "
               
              h4_2="EV App Development"
              p="EV App launched with token redemption and unit purchases. One-stop solution for electric bike users, including maintenance services."
            >One</RoadmapCard>
            <RoadmapCard
              bg="#E3EDFF"
              h4="PHASE - 4"
               
              h4_2="Short Videos Platform"
              p="Short videos platform launch with viewer channel subscriptions and reward tokens for user engagement."
            >One</RoadmapCard>

            <RoadmapCard
              bg="#D9EAE8"
              h4="PHASE - 5"
               
              h4_2=" Metaverse OTT Platform"
              p="Local market, gaming, short storytelling, and motivational content services introduced, seamlessly integrated with the immersive metaverse experience."
            >One</RoadmapCard>
         
        


            <RoadmapCard
              bg="#F2E7E4"
              h4="PHASE - 6"
              // image={r6}
              h4_2="Metaverse Expansion"
              p=" Metaverse development featuring VR, AR, portals, gaming, and adventure parks. Seamless integration of adventure parks enhances the immersive virtual experience."
            >One</RoadmapCard>
          
        <RoadmapCard
          bg="#E3EDFF"
          h4="PHASE - 7"
          // image={r7}
          h4_2=" Dating App Launch"
          p="Dating app launch with peer-to-peer services and a bucket list feature for shared interests. Group chats, family get-togethers, and metaverse travel services integrated."
        >One</RoadmapCard>

        <RoadmapCard
          bg="#D9EAE8"
          h4="PHASE - 8"
          // image={r8}
          h4_2="Green Energy Blockchain"
          p="Blockchain powered by renewable energy introduced, hosting green energy projects with reduced fees for a sustainable and eco-friendly approach."
          >One</RoadmapCard>
          </div>
        </div>
      </div>
    </>
  );
}
