import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/AuthService';
import API from '../utils/API';
import Autosuggest from "react-autosuggest";
import "./theme.css";



class Signup extends Component {
    state = {
        schoolList: [],
        school: "",
        schoolId: null,
        type: "prospect",
        suggestions: []
    };

    constructor() {
        super();
        this.Auth = new AuthService();
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : this.state.schoolList.filter(school =>
            school.NAME.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
    
    getSuggestionValue = suggestion => suggestion.NAME;
    
    // Use your imagination to render suggestions.
    renderSuggestion = suggestion => (
        <div>
            {suggestion.NAME} ({suggestion.ID})
        </div>
    );

    componentWillMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/');
        }
        else {
            API.getSchoolList()
            .then(res => {
                this.setState({schoolList: res.data});
                console.log(this.state.schoolList);
            });
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.signUpUser(this.state.username, this.state.type, this.state.schoolId, this.state.email, this.state.password, this.state.type, this.state.school)
            .then(res => {
                // once the user has signed up
                // send them to the login page
                this.props.history.replace('/login');
            })
            .catch(err => alert(err.message));
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onChange = (event, { newValue }) => {
        this.setState({
            school: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        event.preventDefault();
        this.setState({
            school: `${suggestionValue} (${suggestion.ID})`,
            schoolId: suggestion.ID
        });
    };

    render() {

        const inputProps = {
            placeholder: 'School Name',
            value: this.state.school,
            onChange: this.onChange
        };

        return (
            <div className="container">

                <h4>Join</h4>
                <br />
                <form onSubmit={this.handleFormSubmit}>
                    <label>Are you a...?</label>
                    <select name="type" onChange={this.handleChange}>
                        <option value="prospect">Prospective Student</option>
                        <option value="alumn">Alumni</option>
                    </select>

                    {this.state.type === "alumn" ?
                        <div className="form-group">
                        <label htmlFor="school">Your School</label>
                        <Autosuggest
                            suggestions={this.state.suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            onSuggestionSelected={this.onSuggestionSelected}
                            getSuggestionValue={this.getSuggestionValue}
                            renderSuggestion={this.renderSuggestion}
                            inputProps={inputProps}
                            id="school"
                        />
                        
                        </div>
                        : ""}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control"
                            name="username"
                            type="text"
                            id="username"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control"
                            name="email"
                            type="text"
                            id="email"
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input className="form-control"
                            name="password"
                            type="password"
                            id="pwd"
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="button">Submit</button>
                </form>
                <p><Link to="/login">Go to Login</Link></p>
            </div>
        );
    }
}

export default Signup;