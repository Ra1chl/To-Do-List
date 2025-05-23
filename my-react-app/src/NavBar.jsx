import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // nebo můžeš dát styl inline

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">TaskApp</h2>
      <div className="nav-links">
        <Link to="/">Sign Up</Link>
        <Link to="/list">To-do List</Link>
      </div>
    </nav>
  );
}

export default Navbar;
