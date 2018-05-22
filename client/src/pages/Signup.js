import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/AuthService';
import API from '../utils/API';

class Signup extends Component {
    state = {
        schools: [],
        school: null,
        type: "prospect"
    };

    constructor() {
        super();
        this.Auth = new AuthService();
    }

    componentWillMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/');
        }
        API.getSchoolList()
            .then(res => {
                this.setState({ schools: res.data });
            });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.signUpUser(this.state.username, this.state.type, this.state.school, this.state.email, this.state.password,this.state.type, this.state.school)
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

    render() {
        return (
            <div className="container">

                <h4>Join</h4>
                <br />
                <form onSubmit={this.handleFormSubmit}>
                    <label>Are you a...?</label>
                    <select name="type" onChange={this.handleChange}>
                        <option value="prospect">Prospective Student</option>
                        <option value="alumn">Alumn</option>
                    </select>

                    <datalist id="schools">
                        {this.state.schools.map(school => <option label={school.NAME} value={school.ID} key={school.ID} />)}
                    </datalist>

                    {this.state.type === "alumn" ?
                        <div className="form-group">
                            <label htmlFor="school">My School</label>
                            <input className="form-control"
                                name="school"
                                type="text"
                                id="school"
                                list="schools"
                                onChange={this.handleChange} />
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