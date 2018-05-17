import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (

  <nav className="navbar">
        <div className="nav-wrapper">
            <Link className="brand-logo" to="/"><h1>Uni.fy</h1></Link>
            <span>Find <i>the</i> university for you.</span>
            <ul className="menu">
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/join" className="action">Join</Link></li>
            </ul>
        </div>
    </nav>



  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <Link className="navbar-brand" to="/">
  //     Pupster
  //   </Link>
  //   <div>
  //     <ul className="navbar-nav">
  //       <li
  //         className={
  //           window.location.pathname === "/" ||
  //           window.location.pathname === "/about"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/" className="nav-link">
  //           About
  //         </Link>
  //       </li>
  //       <li
  //         className={
  //           window.location.pathname === "/discover"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/discover" className="nav-link">
  //           Discover
  //         </Link>
  //       </li>
  //       <li
  //         className={
  //           window.location.pathname === "/search"
  //             ? "nav-item active"
  //             : "nav-item"
  //         }
  //       >
  //         <Link to="/search" className="nav-link">
  //           Search
  //         </Link>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
);

export default Navbar;

