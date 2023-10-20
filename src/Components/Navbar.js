import React from 'react';
// Import the CSS file for your Navbar
import logo from '../Illustrations/Blockcrowd_logo.png'; // Import the SVG file
import Logo from '../Illustrations/food crowd.png';
import './../Styles/Navbar.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
      <a href="/"> 
        <img  src={Logo} alt="Logo" className="logo-image" />
      </a>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="/blog" className="navbar-link">Blog</a></li>
        <li className="navbar-item"><a href="/projectlist" className="navbar-link">Campaigns</a></li>
        <li className="navbar-item"><a href="/createProjectPage" className="navbar-link">Create</a></li>
        <li className="navbar-item"><ConnectButton /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
