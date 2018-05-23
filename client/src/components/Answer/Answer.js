import React, { Component } from "react";
import AuthService from "../AuthService";

const auth = new AuthService();

class Answer extends Component {

  render(){
    return(
        <div> HERE IS A QUESTION ANSWER </div>
    )
  }
}

export default Answer;