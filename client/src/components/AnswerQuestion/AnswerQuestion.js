import React, { Component } from "react";
import AuthService from "../AuthService";

const auth = new AuthService();

class AnswerQuestion extends Component {

  render(){
    return(
        <div> {auth.getProfile().type === "prospect" ? <div></div> : <div>ANSWER SOME QUESTIONS!</div>} </div>
    )
  }
}

export default AnswerQuestion;