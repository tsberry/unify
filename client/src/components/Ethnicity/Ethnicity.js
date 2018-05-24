import React from "react";
import "./Scale.css";

const Ethnicity = props => (

    <div>
        <p>{props.percentage}% {props.name}</p>
        <div className="scale-container">
            <div style={{ width: props.percentage + "%" }} className="scale"></div>
        </div>
    </div>
);

export default Ethnicity;

