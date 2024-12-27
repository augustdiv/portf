import React from "react"
import "./project_card.css"


const Poject_card = (props) => {
  return (
    <div className="main-card-container">
       <div className="card">
            <img src={props.img} alt="img"/>
            
        </div>
        <div className="info">
                <h3>{props.header}</h3>
                <p>{props.note}</p>
               <div className="card_btn">
                 <a href="#" className="button">demo</a> 
                 <a href="#" className="button">Code</a>
               </div>
            </div>
   </div> 
  )
};

export default Poject_card;
