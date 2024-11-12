import React, { useState } from "react";

function Card({ cart, setCart, product }) {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    if (toggle) {
      setCart(cart + 1);
    } else {
      setCart(cart - 1);
    }
    setToggle(prev => !prev);
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
          Sale
        </div>
        <img className="card-img-top" src={product.image} alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.product}</h5>
            {product.cost} {"$"}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button className="btn btn-outline-dark mt-auto" onClick={handleClick}>
              {toggle ? "Add to cart" : "Remove from cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
