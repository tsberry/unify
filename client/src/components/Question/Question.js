import React, { Component } from "react";
import AuthService from "../AuthService";
import Answer from "../Answer/Answer";
import AskQuestion from "../AskQuestion/AskQuestion";
import AnswerQuestion from "../AnswerQuestion/AnswerQuestion";

const auth = new AuthService();

class Question extends Component {

  render(){
    return(
        <div> {auth.getProfile().type === "prospect" ? <div>HERE ARE SOME QUESTIONS</div> : <div>HERE ARE SOME QUESTIONS <AnswerQuestion /></div>} </div>
    )
  }
}

export default Question;