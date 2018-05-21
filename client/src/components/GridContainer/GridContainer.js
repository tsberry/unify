import React from "react";
import "./GridContainer.css";

const GridContainer = props => (

    <div className="grid-container">
        {props.children}
    </div>
      
);

export default GridContainer;