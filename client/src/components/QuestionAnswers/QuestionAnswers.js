import React, { Component } from "react";
import "./QuestionAnswers.css";
import AuthService from "../AuthService";
import AskQuestion from "../AskQuestion/AskQuestion";
import Question from "../Question/Question";

const auth = new AuthService();

class QuestionAnswers extends Component {

  render(){
    return(
        <div> 
        {
          auth.getProfile().type === "prospect" 
          ? 
          <div className="cell large-12">
            <Question questions={this.props.questions} /> 
            <br/> 
            <AskQuestion userId={this.props.userId} collegeId={this.props.collegeId} />
          </div> 
          : 
          <div className="cell large-12">
            <Question questions={this.props.questions} userId={this.props.userId} collegeId={this.props.collegeId}/>
          </div>
        } 
        </div>
    )
  }
}

export default QuestionAnswers;

// <prospective student stuff> : <alum stuff>