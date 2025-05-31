import React from 'react';
import './TopNav.css';

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top custom-navbar px-4">
      <div className="container-fluid">
        {/* Logo on the left */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/media/image/logo.svg" alt="Logo" id="web-name" height="30" />
        </a>

        {/* Toggler on the right */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu in center */}
        <div className="collapse navbar-collapse ms-auto" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id='bar'><i class="fa-solid fa-bars"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
