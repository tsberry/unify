import React from "react";
import "./TabsWrapper.css";

const TabsWrapper = props => (

    <div className="row">
        <div className="columns">
            <ul className="accordion" data-responsive-accordion-tabs="accordion medium-accordion large-tabs">
                {props.children}
            </ul>
        </div>
    </div>
);

export default TabsWrapper;