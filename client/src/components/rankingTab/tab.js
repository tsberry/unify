import React from "react";
import "./tab.css";

const tab = props => (
  <div className="card">
    
    <div className="content">
    
      <ul className="tabs" data-responsive-accordion-tabs="tabs medium-accordion large-tabs" id="example-tabs">
        <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Rank
        </a></li>
        <li className="tabs-title"><a href="#panel2">Add Ranking</a></li>
  
      </ul>

      <div className="tabs-content" data-tabs-content="example-tabs">
        <div className="tabs-panel is-active" id="panel1">
          <p><h3>Rank this School</h3></p>
          <p></p>
        </div>
        <div className="tabs-panel" id="panel2">
          <p>two</p>
          
        </div>
        <div className="tabs-panel" id="panel3">
          <p>three</p>
          <p>Check me out! I'm a super cool Tab panel with text content!</p>
        </div>
        <div className="tabs-panel" id="panel4">
          <p>four</p>  
        </div>
      </div>
    </div>
    </div>

      
);

export default tab;
