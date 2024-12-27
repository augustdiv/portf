import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav"
import Project_section from "./components/projects/project_section";
import "./app.css"
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { MdKeyboardArrowUp } from "react-icons/md";


export default function App(){

 

    return <div >
    <div className="app-div">  
    <Nav/>
    <Header/> 
    <Project_section/>
    <About/>
    <Contact/>
    <Footer/>
    <a href="#" class="scrolltop" id="scroll-top">
            <MdKeyboardArrowUp  className="scrolltop__icon"/>
        </a>
    </div>
  
 
    </div>
}

