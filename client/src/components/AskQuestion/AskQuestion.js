import React, { Component } from "react";
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
                <div className="card grad">
                    <div className="card-divider">
                        <h3>Have a Question?:</h3>
                    </div>
                    <div className="card-section">
                        <div className="cell large-12">
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="question">Question Text</label>
                                    <input className="form-control"
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