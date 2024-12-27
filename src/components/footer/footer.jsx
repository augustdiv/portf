import React from "react"
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = (props) => {
  return (
    <section id="footerId">
    <footer>
    <a href="#" className="footer_logo">August Studio</a>   
      

      <ul className="permalink">
            <li><Link  activeClass="active" to="headerId" spy={true} smooth={true} duration={500} offset={-70}>Home</Link></li>
            <li><Link activeClass="active" to="projectId" spy={true} smooth={true} duration={500} offset={-80}>Project</Link></li>
            <li><Link activeClass="active" to="aboutId" spy={true} smooth={true} duration={500} offset={-50} >About</Link></li>
            <li><Link activeClass="active" to="contactId" spy={true} smooth={true} duration={500} offset={-10}>Contact</Link></li>
      </ul>

      <div className="footer_social">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://Instagram.com"><FaInstagram/></a>
        <a href="https://x.com"><FaXTwitter/></a>
      </div>
          
     <div className="footer_copyright">
        <small>&copy; AugStudio. All right reserved.</small>
     </div>
    </footer> 
    </section>
  )
};

export default Footer;
