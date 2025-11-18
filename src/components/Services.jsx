import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="container text-center mt-5">
      <h2 className="fw-bold text-primary mb-4">Our Services</h2>

      <div className="row g-4">
     
        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h4 className="fw-semibold text-dark">Equipment Shop</h4>
            <p className="text-muted">
              Explore high-quality gym equipment and accessories to elevate your workouts.
            </p>
            <Link to="/services/equipment" className="btn btn-primary">
              View Equipment
            </Link>
          </div>
        </div>

      
        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h4 className="fw-semibold text-dark">Group Workouts</h4>
            <p className="text-muted">
              Join engaging group sessions combining fun, flexibility, and discipline.
            </p>
            <Link to="/services/group-workouts" className="btn btn-primary">
              View Group Workouts
            </Link>
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card shadow-sm border-0 rounded-4 p-4">
            <h4 className="fw-semibold text-dark">Strength & Cardio Training</h4>
            <p className="text-muted">
              Boost endurance, build muscle, and improve your cardiovascular health.
            </p>
            <Link to="/services/strength-cardio" className="btn btn-primary">
              View Strength & Cardio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
