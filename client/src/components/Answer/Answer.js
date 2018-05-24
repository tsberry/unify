import React, { Component } from "react";
import AuthService from "../AuthService";

const auth = new AuthService();

class Answer extends Component {

  render() {
    return (
      <div>
        { 
          this.props.answers.map(
            answer =>
              <div className="card">
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