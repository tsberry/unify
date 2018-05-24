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
                                                <h4><b>Question: </b>{question.question}</h4>
                                            </div>
                                            <div className="card-section">
                                                <b>From:</b> {question.User.username}
                                                <hr />
                                                <b>Posted:</b> {question.createdAt}
                                            </div>
                                            <div>
                                                <Answer answers={question.Answers} />
                                            </div>
                                        </div>
                                )
                            }
                        </div> : <div>
                            {
                                this.props.questions.map(
                                    question =>
                                        <div key={question.id} className="card">
                                            <div className="card-divider">
                                                <h4><b>Question: </b>{question.question}</h4>
                                            </div>
                                            <div className="card-section">
                                                <b>From:</b> {question.User.username}
                                                <hr />
                                                <b>Posted:</b> {question.createdAt}
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