import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EquipmentShop() {
  const [equipment, setEquipment] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3002/equipment")
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((err) => console.error("Error loading equipment:", err));
  }, []);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="container py-5 position-relative">
      {/* Cart counter (top-right corner) */}
      <div
        className="position-absolute top-0 end-0 mt-3 me-3 bg-primary text-white rounded-pill px-3 py-1 shadow-sm"
        style={{ fontWeight: "600" }}
      >
        🛒 {cartCount}
      </div>

      {/* Back to services link */}
      <Link to="/services" className="text-decoration-none text-primary mb-4 d-inline-block">
        ← Back to Services
      </Link>

      {/* Page header */}
      <h2 className="fw-bold text-center text-primary mb-3">Equipment Shop</h2>
      <p className="text-center text-muted mb-5">
        Explore our collection of high-quality fitness equipment and accessories to elevate your workouts.
      </p>

      {/* Equipment cards */}
      <div className="row g-4">
        {equipment.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <img
                src={item.img}
                className="card-img-top rounded-top-4"
                alt={item.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-semibold text-dark">{item.name}</h5>
                  <p className="text-muted mb-2">Price: Ksh {item.price}</p>
                  <p className="text-muted small mb-3">
                    Sizes: {item.sizes.join(", ")}
                  </p>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary fw-semibold mt-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
