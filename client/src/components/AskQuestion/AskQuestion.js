import React, { Component } from "react";
import AuthService from "../AuthService";
import API from "../../utils/API";
import axios from "axios";

const auth = new AuthService();

var handleFormSubmit = event => {
    event.preventDefault();
    API.saveQuestion(this.question, this.userId, this.collegeId)
        .then(res => {}).catch(err => alert(err.message));
};

class AskQuestion extends Component {

    render() {
        return (
            <div> {auth.getProfile().type === "prospect" ? <div className="cell medium-12">
                <div className="card grad">
                    <div className="card-divider">
                        <h3>Have a Question?:</h3>
                    </div>
                    <div className="card-section">
                        <div className="container">
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="question">Question Text</label>
                                    <input className="form-control"
                                        name="question"
                                        type="text"
                                        id="question"/>
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