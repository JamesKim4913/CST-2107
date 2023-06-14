import React from 'react';
import {  Link } from "react-router-dom";

const NavBar= () =>{
  return (
  <div>
    <nav className="navbar navbar-dark bg-dark mb-3">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>      
    </nav>       
  </div>
  );
}

export default NavBar;