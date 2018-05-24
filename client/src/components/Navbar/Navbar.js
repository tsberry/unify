import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../AuthService";
import "./Navbar.css";
const auth = new AuthService();
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (

    <nav className="navbar">
        <div className="nav-wrapper">
            <Link className="brand-logo" to="/"><h1>Uni.fy</h1></Link>
            <span id="slogan">Find the university for <i>you</i>.</span>
            <ul className="menu">
                <li><Link to="/search">Search</Link></li>
                {(auth.loggedIn()) ? <li onClick={auth.logout}><Link to="/">Log Out</Link></li> : <li><Link to="/login">Login</Link></li>}
                {(auth.loggedIn()) ? (auth.getProfile().type === "alumn" ?
                    <li><Link to={`/info/${auth.getProfile().school}`} className="action">My School</Link></li>
                    : <li><Link to="/saved" className="action">Saved</Link></li>)
                    : <li><Link to="/join" className="action">Join</Link></li>}
            </ul>
        </div>
    </nav>

);

export default Navbar;

