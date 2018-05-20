import React from "react";
import "./TitleCard.css";

const TitleCard = props => (

    <div className="callout secondary">
        <h2>{props.name}</h2>
        <p>{props.city}, {props.state}</p>
        <a href={props.url}>{props.url}</a>
    </div>
  );
  
  export default TitleCard;