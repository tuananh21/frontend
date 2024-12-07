import React, { useState, useEffect } from "react";
import { fetchCartSummary, updateCartSummary } from "../../services/api";

const ViewCartSummary = () => {
    const [cartSummary, setCartSummary] = useState({
        subtotal: 0,
        discount: 0,
        tax: 0,
        total: 0,
    });

    const loadCartSummary = async () => {
        try {
            await updateCartSummary();
            console.log("Cart summary updated successfully!");
            const data = await fetchCartSummary();
            setCartSummary(data);
            console.log("Cart summary fetched successfully:", data);
        } catch (error) {
            console.error("Error while loading cart summary:", error);
        }
    };

    useEffect(() => {
        loadCartSummary();
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

export default ViewCartSummary;
