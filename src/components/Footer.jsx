import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-warning py-4 mt-5 shadow-sm">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
       
        <div className="mb-3 mb-md-0 text-center text-md-start">
          <h3 className="fw-bold fs-3 mb-2">VibeFit</h3>
          
        </div>

        <ul className="nav justify-content-center mb-3 mb-md-0">
          
          <li className="nav-item">
            <Link className="nav-link text-warning" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning" to="/contact">Contact</Link>
          </li>
        </ul>

      
        <div className="text-center text-md-end text-light small">
          © 2025 VibeFit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
