import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";

import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <div
        id="home"
        className="hero-section d-flex align-items-center justify-content-center text-center text-dark vh-100"
      >
        <div className="overlay"></div>
        <div className="position-relative z-3">
          <h1 className="display-4 fw-bold text-primary mb-3">Welcome to VibeFit</h1>
          <p className="lead mb-4 text-secondary">
            Train harder. Live stronger. Be unstoppable.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/services" className="btn btn-primary btn-lg">
              View Offers
            </Link>
            <Link to="/register" className="btn btn-primary btn-lg">
              Join Now
            </Link>
          </div>
        </div>
      </div>

      <About />
      <Services />
    
      <Contact />
      <Footer />
    </>
  );
}
