import React, { Component } from "react";
import "./AskQuestion.css";
import AuthService from "../AuthService";
import API from "../../utils/API";
//import axios from "axios";

const auth = new AuthService();

class AskQuestion extends Component {
    state = {
        question : "",
    };

    handleFormSubmit = event => {
    
        API.saveQuestion(this.state.question, this.props.userId, this.props.collegeId)
            .then(res => {}).catch(err => alert(err.message));
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        return (
            <div> {auth.getProfile().type === "prospect" ? <div className="cell medium-12">
                <div className="card">
                    <div className="card-divider">
                        <p>Have a Question?</p>
                    </div>
                    <div className="card-section" id="question-box">
                        <div className="cell large-12">
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="question">Ask below</label>
                                    <textarea className="form-control"
                                        name="question"
                                        type="text"
                                        id="question"
                                        onChange={this.handleChange}/>
                                </div>
                                <button type="submit" className="button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> : <div></div>} </div>
        )
    }
}

export default AskQuestion;