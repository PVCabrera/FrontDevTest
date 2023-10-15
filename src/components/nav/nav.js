import React, { useState } from 'react';
import './nav.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="1">
            Herox
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav} // Toggle the navbar state on button click
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="2">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="3">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="4">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="5">
                  About Us
                </a>
              </li>
            </ul>
          </div>
            <div className="btn-loc">
            <button type="button" className="register-btn">
              Register/Login
            </button>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

