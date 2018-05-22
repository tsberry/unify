import React from "react";
import "./Hero.css";

const Hero = props => (
  <div class="grid-x">
    <div class="cell small-12 medium-12 large-12">
      <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
      </div>
    </div>
  </div>
);

export default Hero;
