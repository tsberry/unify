import React from "react";
import "./Scale.css";

const Ethnicity = props => (
    <div>
    <p>{props.percentage}% {props.name}</p>
    <progress max="100" value={props.percentage}></progress>
    </div>
);

export default Ethnicity;