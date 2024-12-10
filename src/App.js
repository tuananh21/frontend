import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ShopList from "./components/pages/ShopList";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import About from "./components/pages/About";
import UserDashboard from "./components/pages/UserDashboard";
import UserMessage from "./components/pages/UserMessage";
import UserNotification from "./components/pages/UserNotification";
import Wishlist from "./components/pages/Wishlist";
import UserProfile from "./components/pages/UserProfile";
import Product from "./components/pages/Product";
import Contact from "./components/pages/Contact";
import Checkout from "./components/pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shoplist" element={<ShopList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/message" element={<UserMessage />} />
      <Route path="/notification" element={<UserNotification />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
