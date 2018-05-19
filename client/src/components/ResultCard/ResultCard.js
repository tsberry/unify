import React from "react";
import "./ResultCard.css";

const ResultCard = props => (
 
  <div className="grid-container callout secondary">
      <h4>{props.name}</h4>
      <p>{props.city}, {props.state}</p>
      <p>{props.students} Undergraduate Students</p>
      <p>{props.url}</p>
    
    <div className="grid-x">
      <div className="large-1 cell">{props.years}</div>
      <div className="large-1 cell">{props.location}</div>
      <div className="large-1 cell">{props.size}</div>
      <div className="large-3 cell">{props.ownership}</div>
    </div>
  </div>


);

export default ResultCard;
