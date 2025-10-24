import React from "react";

export default function Footer() {
  return (
    <footer className="footer text-light py-4 mt-5">
      <div className="container footer-inner d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="f-col text-center text-md-start mb-3 mb-md-0">
          <h3 className="logo text-warning fw-bold fs-3 mb-2">VibeFit</h3>
          <p className="text-muted small mb-0">
            At <strong>VibeFit</strong>, we believe fitness is more than a routine — it's a lifestyle.  
            Join our community and find your rhythm, your strength, your vibe.
          </p>
        </div>

        <div className="footer-bottom text-center mt-3 mt-md-0">
          © All rights reserved.
        </div>
      </div>
    </footer>
  );
}
