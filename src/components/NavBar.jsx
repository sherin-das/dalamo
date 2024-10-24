import React from 'react';
import logo from '../assets/dalamo.png';
import './navbar.css';

function NavBar() {
  return (
    <>
      <nav className="navbar  navbar-expand-md navbar-light bg-white fixed-top bg-gray">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="logoimage" src={logo} alt="logo" />
          </a>

          {/* Toggler/collapsible Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link px-4" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="/careers">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="/aboutus">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
