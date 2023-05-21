import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact="true" to="/">Home</NavLink>
      <NavLink exact="true" to="/chips">Chips</NavLink>
      <NavLink exact="true" to="/soda">Soda</NavLink>
      <NavLink exact="true" to="/coffee">Coffee</NavLink>
    </nav>  
  );
}

export default NavBar;
