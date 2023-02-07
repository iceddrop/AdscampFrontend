import React from 'react';
import Nav from '../nav/Nav';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><Link to="/">Adscamp</Link></h1>
     <Nav/>
    </div>
  </header> 
    )
}

export default Header;


