import React from "react";
import "./TitleCard.css";

const TitleCard = props => (

    <div className="cell large-12">
        <div className="callout secondary title">
            <h2>{props.name}<span className="fa fa-star favorite"></span></h2>
            <p>{props.city}, {props.state}</p>
            <a href={props.url}>{props.url}</a>
        </div>
    </div>
  );
  
  export default TitleCard;