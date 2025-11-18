import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EquipmentShop() {
  const [equipment, setEquipment] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3002/equipment")
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      
  }, []);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="cont">
      <div className="container py-5 position-relative ">

      <div
        className="position-absolute top-0 end-0 mt-3 me-3 bg-primary text-white rounded-pill px-3 py-1 shadow-sm"
       
      ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
        {cartCount}
      </div>

        <Link to="/services" className="btn btn-outline-primary">
          Back to Services
        </Link>



      <h2 className="fw-bold text-center text-primary mb-3">Equipment Shop</h2>
      <p className="text-center text-muted mb-5">
        Explore our collection of high-quality fitness equipment and accessories to elevate your workouts.
      </p>


      <div className="row g-4">
        {equipment.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card shadow-sm border-0 rounded-4 h-100 ">
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top object-fit-cover "
                style={{ height: "400px", objectFit: "cover", borderRadius: "0.5rem" }}
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
    </div>
  );
}
