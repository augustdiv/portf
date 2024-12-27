import React from "react"
import Logo from "../../images/myLogo.png"
import {Link} from 'react-scroll'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import "./nav.css"

 export default function Nav (props) {

  function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollTop)


  function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('nav-container-shadow'); else nav.classList.remove('nav-container-shadow');
    if(this.scrollY >= (2000)) nav.classList.add('hide-onview'); else nav.classList.remove('hide-onview');
  }
  window.addEventListener('scroll', scrollHeader)

 const [isToggled, changeIsToggled] = useState(false);

  return (


   <header className="nav-container" id="header">
       <Link to="headerId" smooth={true} duration={300} offset={-70}>
            <div className="img-div">
            <img src={Logo} alt="logo" /> 
            <h1 className="logo-name">AugStudio</h1>
       </div></Link>

      <nav className= "main-nav" >
          <ul className= "nav-ul">
            <li>    <Link activeClass="active" to="headerId"  spy={true}   smooth={true}   duration={300} offset={-70}   className="item item1">Home</Link></li> 
            <li>    <Link activeClass="active" to="projectId" spy={true}   smooth={true}   duration={300} offset={-80}   className="item item2">Project</Link></li> 
            <li>    <Link activeClass="active" to="aboutId"   spy={true}   smooth={true}   duration={300} offset={-110}  className="item item3">About</Link></li> 
            <li>    <Link activeClass="active" to="contactId" spy={true}   smooth={true}   duration={500} offset={-80}   className="item item4">Contact</Link></li> 
          </ul>
     </nav>
          
     
    <nav className={isToggled ? "main-nav-menu" : "hide-main-nav-menu"}>

       <ul className="nav-ul-menu">
          <li>    <Link activeClass="active" to="headerId"  spy={true} smooth={true} duration={500} offset={-70}  onClick={()=>changeIsToggled(!isToggled)} className="item item1">Home</Link></li> 
          <li>    <Link activeClass="active" to="projectId" spy={true} smooth={true} duration={500} offset={-80}  onClick={()=>changeIsToggled(!isToggled)} className="item item2">Project</Link></li> 
          <li>    <Link activeClass="active" to="aboutId"   spy={true} smooth={true} duration={500} offset={-110} onClick={()=>changeIsToggled(!isToggled)} className="item item3">About</Link></li> 
          <li>    <Link activeClass="active" to="contactId" spy={true} smooth={true} duration={500} offset={-80}  onClick={()=>changeIsToggled(!isToggled)} className="item item4">Contact</Link></li> 
        </ul>
     </nav>
    { !isToggled? <IoMenu className="menu-icon" onClick={()=>changeIsToggled(!isToggled)}/> : <IoClose  className="menu-icon"  onClick={()=>changeIsToggled(!isToggled)} /> }
</header>
  )
};


