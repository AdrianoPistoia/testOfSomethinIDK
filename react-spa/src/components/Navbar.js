import React from 'react';
import  { NavLink } from "react-router-dom";
import '../styleSheets/Navbar.css';
function navbar() {
  return (
    <div className="mi-navbar">
       <h1 className='mi-navbar-logo'>N o t e - M a n a g e r</h1> 
        <ul>
            <li><NavLink data-content="Home" exact="true" to="/">Home</NavLink></li>
            <li><NavLink data-content="Notes" to="/Notes">Notes</NavLink></li>
            <li><NavLink data-content="Archives" to="/ArchivedListing">Archives</NavLink></li>
        </ul>
        </div>
  )
}

export default navbar