import React from "react";
import "./Hero.css";

const Hero = props => (

  <div className="slideshow-container">
    <img src="./assets/img/fabian-mardi-119790-unsplash.jpg" alt="university background"/>
    {props.children}
  </div>

);
    
export default Hero;

/* <div className="hero text-center">
      {props.children}
    </div> */
    