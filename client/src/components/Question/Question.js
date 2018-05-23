import React, { Component } from "react";
import AuthService from "../AuthService";
import Answer from "../Answer/Answer";
import AskQuestion from "../AskQuestion/AskQuestion";
import AnswerQuestion from "../AnswerQuestion/AnswerQuestion";

const auth = new AuthService();

class Question extends Component {

  render(){
    return(
        <div> 
          {
            auth.getProfile().type === "prospect" ? 
            <div>
              {
                this.props.questions.map(question => 
                <div className="card">
                  <div className="card-divider"> 
                    Question : <h3>{question.question}</h3> 
                  </div>
                  <div className="card-section">
                    Asker : {question.User.username}
                    <hr />
                    Posted : {question.createdAt}
                  </div>
                </div>)
              }
              </div> : <div>
            HERE ARE SOME QUESTIONS <AnswerQuestion />
          </div>} 
        </div>
    )
  }
}

export default Question;