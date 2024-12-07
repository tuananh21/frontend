import React, { createContext, useContext, useState, useCallback } from "react";
import { fetchCartSummary, updateCartSummary, fetchCartItems } from "../../services/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartSummary, setCartSummary] = useState({
    subtotal: 0,
    discount: 0,
    tax: 0,
    total: 0,
  });

  const loadCartSummary = useCallback(async () => {
    try {
      await updateCartSummary();
      const data = await fetchCartSummary();
      setCartSummary(data);
    } catch (error) {
      console.error("Error while loading cart summary:", error);
    }
  }, []);

  const loadCartItems = useCallback(async () => {
    try {
      const data = await fetchCartItems();
      setCartItems(data);
    } catch (error) {
      console.error("Error while loading cart items:", error);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, cartSummary, loadCartSummary, loadCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
