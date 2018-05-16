import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <div className="nav-wrapper">
            <Link className="brand-logo" to="/"><h1>Uni.fy</h1></Link>
            <span>Find <i>the</i> university for you.</span>
            <ul className="menu">
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/join" class="action">Join</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;