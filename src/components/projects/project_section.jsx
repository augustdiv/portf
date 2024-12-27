import React from "react"
import "./project_section.css"
import Poject_card from "./project_card";
import Crypt from "../../images/crypt1.jpg"
import Ecoms from "../../images/ecoms.jpeg"
import Ecoms2 from "../../images/ecom2.jpeg"
import Ecoms3 from "../../images/ecoms3.png"
import Hotel from "../../images/hotel.jpeg"
import { motion } from "framer-motion";




export default function project_section(){

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"

      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1,
    ease:"easeInOut",
    }
  }

  return (
   <div className="project-container" id="projectId">
          <div className="project_title">
            <h4> my</h4>
            <h2>Portfolio</h2>
          </div>
   

          < motion.div  className="grid-container"
            variants={container}
            initial="hidden"
            whileInView='show'
         
          > 
       
             <motion.div variants={item}><Poject_card   img={Crypt} header="Crypto" note=". Tenetur, quibusdam."/></motion.div>
             <motion.div variants={item}><Poject_card   img={Ecoms} header="Herna" note="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quibusdam."/></motion.div>
             <motion.div variants={item}><Poject_card   img={Ecoms2} header="Luna" note="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quibusdam."/></motion.div>
             <motion.div variants={item}><Poject_card   img={Ecoms3} header="Wears" note="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quibusdam."/></motion.div>
             <motion.div variants={item}><Poject_card   img={Hotel} header="Hotel" note="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quibusdam."/></motion.div>
             <motion.div variants={item}><Poject_card    img={Crypt} header="Crypto" note="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quibusdam."/></motion.div>
     

          </motion.div>
      
    </div> 
  )
};


