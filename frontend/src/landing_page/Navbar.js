import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
      <div className="container-fluid">
        
        <Link className="navbar-brand fw-bold" to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha"
            height="20"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarZerodha"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarZerodha">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/support">Support</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
