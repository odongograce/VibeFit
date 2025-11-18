import React from "react";
import { Link } from "react-router-dom";

export default function GroupWorkouts() {
  return (
    <div className="container text-center mt-5">
      <h2 className="fw-bold text-primary mb-4">Group Workouts</h2>
      <p className="text-muted fs-5 mb-5">
        Join our fun, high-energy group sessions that improve flexibility, endurance, and mental focus.
        Whether you're into Aerobics or Karate, our classes are designed to keep you active and motivated!
      </p>

      <div className="row g-4">
      
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 p-3">
            <h4 className="fw-semibold text-dark mb-3">Aerobics Session</h4>
            <div className="ratio ratio-16x9 mb-3">
              <iframe
                src="https://www.youtube.com/embed/1f8yoFFdkcY"
                title="Aerobics Session"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-muted">
              Boost your energy with our heart-pumping aerobics sessions! Ideal for all fitness levels.
            </p>
          </div>
        </div>

        
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 p-3">
            <h4 className="fw-semibold text-dark mb-3">Karate Class</h4>
            <div className="ratio ratio-16x9 mb-3">
              <iframe
                src="https://www.youtube.com/embed/gfbgaTfb-Fk"
                title="Karate Class"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-muted">
              Learn discipline and self-defense through dynamic karate techniques taught by experts.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Link to="/services" className="btn btn-outline-primary">
          Back to Services
        </Link>
      </div>
    </div>
  );
}
