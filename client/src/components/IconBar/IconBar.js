import "./IconBar.css";
import API from "../../utils/API";
import React, { Component } from "react";
import bookImg from "./icons/book.png";
import coffee from "./icons/coffee.png"
import gym from "./icons/dumbbell-for-training.png"
import restaurant from "./icons/restaurant.png"
import transport from "./icons/transport.png"



class IconBar extends Component {

    render(){
      return(
         <div className = "large-4 "> 
        
        <div id="#icons"><img src={bookImg} /></div>
        <div id="#icons"><img src={coffee}/></div>
        <div id="#icons"><img src={gym}/></div>
        <div id="#icons"><img src={restaurant}/></div>
        <div id="#icons"><img src={transport}/></div>
         
          </div>
      )
    }
  }
  


export default IconBar;