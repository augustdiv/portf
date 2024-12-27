import React from "react"
import "./header.css"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { motion} from "framer-motion"

const header = (props) => {


  return (
  
    <section id="headerId" >   <div className="header-m-cont">
      <motion.div 
     
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 3,
       
        }}
    
      className="header-content-cont">
      <h5>Hi I'm</h5>
              <div className="animated_container">
                  <span></span>
              </div>
          <h1>APP/WEB DEVELOPER</h1>
          Native App and Web with astonishing User interface 
              
               {/* <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis neque incidunt .</h4> */}
               <h4>  Native App and Web with Astonishing User interface, with loads of experience packed into any.</h4>
              <div className="header-btn-wrapper">
                     <div className="btn-hire">  Hire me</div>
                  <div className="react_icon_holder">
                    <a href="https://www.linkedin.com/"><FaLinkedinIn className="react-icons-header" /></a>
                      <a href="https://github.com/augustdiv"><FaGithub  className="react-icons-header" /></a>
                  </div>
          
              </div> 
       </motion.div>
   
      <motion.div 
       initial={{
        scale:0,
        opacity:0
         }}

       whileInView={{
         scale:1, 
         opacity:1}}

       transition={{
        ease: "easeInOut",
        duration:0.5,
     
        
        }}
      className="img-holder-cont">

     </motion.div>
       
    </div>
    <div className="skill-container">
    <div className="skill-h2"><h2>Experience</h2></div>
    <div className="skills_icons_Container">

    <BiLogoFlutter className="react-icons-skill flutter"/>  
    <FaHtml5 className="react-icons-skill html"/>
    <FaReact className="react-icons-skill react"/>
    <BiLogoJavascript className="react-icons-skill java"/>
    <FaLaravel className="react-icons-skill laravel"/>
    
     </div>
    </div>
    </section>
  )
};

export default header;
