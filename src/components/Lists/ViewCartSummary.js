import React, { useState, useEffect } from "react";
import axios from "axios";

const CartSummary = () => {
  const [cartSummary, setCartSummary] = useState({
    subtotal: 0,
    discount: 0,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    const fetchCartSummary = async () => {
      try {
        const response = await axios.get("/api/cart/summary");
        setCartSummary(response.data);
      } catch (error) {
        console.error("Error fetching cart summary:", error);
      }
    };

    fetchCartSummary();
  }, []);

  return (
    <div className="col-lg-4">
      <div className="shop-cart-summary">
        <h5>Cart Summary</h5>
        <ul>
          <li>
            <strong>Sub Total:</strong>
            <span>${cartSummary.subtotal}</span>
          </li>
          <li>
            <strong>Discount:</strong>
            <span>${cartSummary.discount}</span>
          </li>
          <li>
            <strong>Shipping:</strong>
            <span>Free</span>
          </li>
          <li>
            <strong>Taxes:</strong>
            <span>${cartSummary.tax}</span>
          </li>
          <li className="shop-cart-total">
            <strong>Total:</strong>
            <span>${cartSummary.total}</span>
          </li>
        </ul>
        <div className="text-end mt-40">
          <button className="theme-btn">
            Checkout Now
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
