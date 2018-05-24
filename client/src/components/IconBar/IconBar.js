import "./IconBar.css";
import API from "../../utils/API";
import React, { Component } from "react";


class IconBar extends Component {

    render(){
      return(
         <div className = "large-4 "> 
        
        <a href="#icons"><img src="./icons/book.png"/></a>
        <a href="#icons"><img src="icons/food.png"/></a>
        <a href="#icons"><img src="icons/food.png"/></a>
        <a href="#icons"><img src="icons/food.png"/></a>
        <a href="#icons"><img src="icons/food.png"/></a>
         
          </div>
      )
    }
  }
  


export default IconBar;