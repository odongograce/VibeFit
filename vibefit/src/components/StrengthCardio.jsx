import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StrengthCardio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/strengthCardio")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      
  }, []);

  return (
    <div className="container py-5">
      
              <Link to="/services" className="btn btn-outline-primary">
                Back to Services
              </Link>
      <h1 className="text-center text-primary fw-bold mb-4">
        Strength & Cardio Training
      </h1>
      <p className="text-center text-muted mb-5">
        Boost endurance, build muscle, and improve your cardiovascular health with guided routines.
      </p>

      <div className="row g-4">
        {videos.map((vid) => (
          <div key={vid.id} className="col-md-6">
            <div className="card shadow-sm border-0 rounded-4 p-3 h-100">
              <h4 className="fw-semibold text-dark mb-3">{vid.title}</h4>
              <div className="ratio ratio-16x9 mb-3">
                <iframe
                  src={vid.video}
                  title={vid.title}
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-muted">{vid.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrengthCardio;
