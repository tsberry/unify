import React, { Component } from "react";
import Answer from "../Answer/Answer";
import AnswerWrapper from "../AnswerWrapper";

class Question extends Component {

    render() {
        return (
            <div>
              {
                !this.props.mySchool ?
                <div>
                    {
                this.props.questions.map(
                  question => 
                  <div className="card"> 
                    <div className="card-divider"> 
                      <p><b>{question.User.username}</b> asked on {question.createdAt}</p>
                    </div>
                    <div className="card-section">
                      <p>{question.question}</p> 
                    </div>
                    <div> 
                      <Answer answers={question.Answers}/>
                    </div>
                  </div>
                )
              }
              </div> : <div>
              {
                this.props.questions.map(
                  question => 
                  <div className="card">
                    <div className="card-divider"> 
                      <p><b>{question.User.username}</b> asked on {question.createdAt}</p>
                    </div>
                    <div className="card-section">
                      <p>{question.question}</p>
                    </div>
                    <AnswerWrapper answers={question.Answers} questionId={question.id} userId={this.props.userId} collegeId={this.props.collegeId}/>

                  </div>
                )
              } 
          </div>
          } 
        </div>
    )
  }
}

export default Question;