import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-sm" style={{ padding: "0.6rem 2rem" }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-warning" to="/">VibeFit</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold">

            <li className="nav-item"><Link className="nav-link text-warning" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-warning" to="/services">Services</Link></li>

            <li className="nav-item"><Link className="nav-link text-warning" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link text-warning" to="/register">Register</Link></li>
            <li className="nav-item"><Link className="nav-link text-warning" to="/login">Login</Link></li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
