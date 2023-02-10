import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () =>{
  const showHide = () =>{

    document.getElementById("side").classList.toggle("d-none");
  }

    return(

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link  to='/' className="nav-link scrollto active">Home</Link></li>
          <li><Link  to='/' className="nav-link scrollto active">Campaign</Link></li>
        </ul>
        <i onClick={showHide} className="fas fa-arrow-right mobile-nav-toggle"></i>
      </nav>
    )
}

export default Nav;
