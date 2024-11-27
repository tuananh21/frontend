import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import UserDashboard from "./components/UserDashboard";
import UserMessage from "./components/UserMessage";
import UserNotification from "./components/UserNotification";
import Wishlist from "./components/Wishlist";
import UserProfile from "./components/UserProfile";
import Product from "./components/Product";
import Contact from "./components/Contact";

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
      <Route path="/product" element={<Product />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
