import React, { Component } from "react";
import "./QuestionAnswers.css";
import AuthService from "../AuthService";
import AskQuestion from "../AskQuestion/AskQuestion";
import Question from "../Question/Question";

const auth = new AuthService();

class QuestionAnswers extends Component {

  render(){
    return(
        <div> {auth.getProfile().type === "prospect" ? <div className="cell large-12"><Question questions={this.props.questions} /> <br/> <AskQuestion userId={this.props.userId} collegeId={this.props.collegeId}/></div> : <div className="cell large-12"><Question questions={this.props.questions}/></div>} </div>
                                                            //Questions component will have an Answers component within it. 
                                                            //If the user is prospect, they may add a questions in the AskQuestion Component
                                                            //If the user is an alum, they may add answers into the Answers component
                                                            //This is a comment that 
    )
  }
}

export default QuestionAnswers;

// <prospective student stuff> : <alum stuff>