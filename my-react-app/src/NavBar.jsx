import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [navbarColor, setNavbarColor] = useState("#0f172a");

  const handleColorChange = (e) => {
    setNavbarColor(e.target.value);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: navbarColor }}>
      <div className="logo">TaskManager</div>

      <div className="nav-links">
        <Link to="/">Register</Link>
        <Link to="/list">Tasks</Link>

        <input
          type="color"
          value={navbarColor}
          onChange={handleColorChange}
          className="color-picker"
          title="Pick navbar color"
        />
      </div>
    </nav>
  );
}

export default Navbar;