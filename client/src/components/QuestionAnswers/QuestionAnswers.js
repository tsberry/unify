import React, { Component } from "react";
import "./QuestionAnswers.css";
import AuthService from "../AuthService";
import AskQuestion from "../AskQuestion/AskQuestion";
import Question from "../Question/Question";

const auth = new AuthService();

class QuestionAnswers extends Component {

    render() {
        return (
            <div className="cell large-12">
                {
                    auth.getProfile().type === "prospect"
                        ?
                        <div className="cell large-12">
                            <AskQuestion onQuestion={this.props.onQuestion} userId={this.props.userId} collegeId={this.props.collegeId} />
                            <Question questions={this.props.questions} />
                        </div>
                        :
                        <div className="cell large-12">
                            <Question mySchool={this.props.mySchool} questions={this.props.questions} userId={this.props.userId} collegeId={this.props.collegeId} />
                        </div>
                }
            </div>
        )
    }
}

export default QuestionAnswers;

// <prospective student stuff> : <alum stuff>