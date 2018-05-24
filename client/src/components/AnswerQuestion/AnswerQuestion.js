import React, { Component } from "react";
import "./AnswerQuestion.css";
//import AuthService from "../AuthService";
import API from "../../utils/API";
//import axios from "axios";

//const auth = new AuthService();

class AnswerQuestion extends Component {

  state = {
    answer: "",
  };

  handleFormSubmit = event => {
    console.log("text:"+this.state.answer+"qId:"+this.props.questionId +"uId:"+ this.props.userId+"colId:"+ this.props.collegeId);
    //(answer, questionId, userId, collegeId)
    API.saveAnswer(this.state.answer, this.props.questionId, this.props.userId, this.props.collegeId)
      .then(res => { }).catch(err => alert(err.message));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="cell medium-12">
        <div className="card">
          <div className="card-section">
            <div className="cell large-12">
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="answer">Answer Question</label>
                  <textarea className="form-control"
                    name="answer"
                    type="text"
                    id="answer"
                    onChange={this.handleChange} />
                </div>
                <button type="submit" className="button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnswerQuestion;