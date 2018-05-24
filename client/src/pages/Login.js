import React, { Component } from 'react';
import AuthService from '../components/AuthService';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    componentWillMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/');
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();

        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                // once user is logged in
                // take them to their profile page
                this.props.history.replace(`/`);
            })
            .catch(err => {
                this.handleLoginErr(err.response.data.message);
            });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleLoginErr(message) {
        toast(message, { position: toast.POSITION.BOTTOM_CENTER });
    }

    render() {
        return (
            <div className="login-container">
                <h4>Login</h4>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control"
                            name="username"
                            type="text"
                            id="username"
                            onChange={this.handleChange}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input className="form-control"
                            name="password"
                            type="password"
                            id="pwd"
                            onChange={this.handleChange}
                            required />
                    </div>
                    <button type="submit" className="button">Submit</button>
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>
                <p><Link to="/join">or Sign-up!</Link></p>
                <ToastContainer closeButton={false} hideProgressBar={true} />
            </div>

        );
    }
}

export default Login;
