import React, { Component } from "react";
import Answer from "../Answer";
import AnswerQuestion from "../AnswerQuestion";

class AnswerWrapper extends Component {
    state = {
        answers: this.props.answers
    }

    onAnswer = answers => {
        this.setState({ answers: answers });
    }

    render() {
        return (
            <div>
                <div className="card-divider">
                    <Answer answers={this.state.answers} />
                </div>
                <div className="card-divider">
                    <AnswerQuestion onAnswer={this.onAnswer} questionId={this.props.questionId} userId={this.props.userId} collegeId={this.props.collegeId} />
                </div>
            </div>
        );
    }
}

export default AnswerWrapper;