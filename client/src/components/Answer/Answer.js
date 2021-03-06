import React, { Component } from "react";

class Answer extends Component {

    render() {
        return (
            <div>
                {
                    this.props.answers.map(
                        answer =>
                            <div key={answer.id} className="card">
                                <div className="card-section">
                                    <b>{answer.User.username}</b> : {answer.answer}
                                </div>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default Answer;