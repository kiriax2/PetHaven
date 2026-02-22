import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, username, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" />
          </Link>
        </h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adoption">Adoption</Link></li>
          <li><Link to="/release">Release</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        {!isLoggedIn && (
          <>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/signup" className="nav-btn">Sign Up</Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <span className="welcome-text">Welcome, {username}</span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
