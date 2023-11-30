import "./Usecase.css"
import { motion } from "framer-motion"
// import uleftimg from "../../../assets/images/usecase left 2.jpg"

import u1 from '../../../assets/icons/u1.svg'
import u2 from '../../../assets/icons/u2.svg'
import u3 from '../../../assets/icons/u3.svg'
import u4 from '../../../assets/icons/u4.svg'
import u5 from '../../../assets/icons/u5.svg'
import u6 from '../../../assets/icons/u6.svg'
import u7 from '../../../assets/icons/u7.svg'
import u8 from '../../../assets/icons/u8.svg'
import glob from '../../../assets/images/aiai.svg'

 

const usecase = () => {
  return (
    <div id="usecase-main">
      <div id="glob">
        <img src={glob} alt="" />
      </div>
      <motion.div className='s3header' whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} transition={{
        ease: "linear",
        duration: 1,
      }}
        whileInView={{ opacity: 1 }}>
        <p className='s3headersmall'>Usecases <span style={{color:'white'}}> Of Victa</span></p>
        <p className='s3header1'>
          The versatility of VICTA manifests through its diverse use cases, enhancing user engagement and utility within the VICTA ecosystem Some key use cases include.
        </p>

      </motion.div>

      <motion.div className='s3usecase'

      >
 


        <div className='s3usecaseright'>

          <div className='usecasemain'>
            {/* <div id="use-main-inner"> */}
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
              >
                <div>
                  <img src={u1} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Utility Payments</p>
                  <p className='ucpara'>VICTA serves as the medium for seamless utility payments, encompassing mobile recharges, electricity bills, fast tag transactions, and various other bill settlements within the utility wallet.</p>
                  
                </div>

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
              >
                <div>
                  <img src={u2} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>E-Commerce Transactions</p>
                  <p className='ucpara'>Users can utilize VICTA for transactions within the {"Shop Saver"} feature, making purchases across a wide range of e-commerce products and services.

                  </p>

                </div>

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
              >
                <div>
                  <img src={u3} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>EV App</p>
                  <p className='ucpara'>VICTA facilitates transactions within the dedicated EV App, allowing users to redeem tokens and purchase vouchers for electric vehicle-related services.</p>
                  
                </div>

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
              >
                <div>
                  <img src={u4} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Short Video Hosting Rewards</p>
                  <p className='ucpara'>Content creators are rewarded with VICTA for hosting short videos, fostering engagement and content creation within the platform.
                  </p>
                  
                </div>

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
              >
                <div>
                  <img src={u5} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>OTT Platform Subscriptions</p>
                  <p className='ucpara'> Users can subscribe to the  OTT platform using VICTA, gaining access to a diverse array of content, including local markets, gaming, short storytelling, and motivational pieces.

                  </p>
                 
                </div>

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
              >
                <div>
                  <img src={u6} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Dating App Interactions</p>
                  <p className='ucpara'> VICTA plays a role in the dating app, potentially facilitating transactions, rewarding engagements, or unlocking premium features.

                  </p>
                
                </div>

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
              >
                <div>
                  <img src={u7} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>Green Energy Blockchain</p>
                  <p className='ucpara'>VICTA is integral to transactions within the green energy blockchain, supporting renewable energy projects with lower transaction costs.</p>
                   
                </div>

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
              >
                <div>
                  <img src={u8} style={{ width: 50, height: 50, marginRight: 5 }} />
                </div>
                <div>
                  <p className='ucheading'>DEXA Transactions</p>
                  <p className='ucpara'>In the decentralized exchange (DEXA), users can utilize VICTA for secure and efficient transactions, contributing to liquidity and platform functionality.</p>
                   
                </div>

              </motion.div>
 
          </div>
        </div>
      </motion.div>



    </div>
  )
}

export default usecase