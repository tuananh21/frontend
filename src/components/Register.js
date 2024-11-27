import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../assets/css/bootstrap.min.css";
import "../assets/css/all-fontawesome.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/jquery-ui.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/style.css";
import Header from "./Header";
import Footer from "./Footer";

import logo from "../assets/img/logo/logo.png";
import megabanner from "../assets/img/banner/mega-menu-banner.jpg";
import breadcrumb1 from "../assets/img/breadcrumb/01.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("You must agree to the Terms of Service to register.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/users", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        alert("Registration successful!");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };


  return (
    <>
      {/* header area */}
      <Header />
      {/* header area end */}
      {/* popup search */}
      <div className="search-popup">
        <button className="close-search">
          <span className="far fa-times" />
        </button>
        <form action="#">
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              className="form-control"
              placeholder="Search Here..."
              required=""
            />
            <button type="submit">
              <i className="far fa-search" />
            </button>
          </div>
        </form>
      </div>
      {/* popup search end */}
      <main className="main">
        {/* breadcrumb */}
        <div className="site-breadcrumb">
          <div
            className="site-breadcrumb-bg"
            style={{ background: `url(${breadcrumb1})` }}
          />
          <div className="container">
            <div className="site-breadcrumb-wrap">
              <h4 className="breadcrumb-title">Register</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <a href="index.html">
                    <i className="far fa-home" /> Home
                  </a>
                </li>
                <li className="active">Register</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* register area */}
        <div className="login-area py-100">
          <div className="container">
            <div className="col-md-5 mx-auto">
              <div className="login-form">
                <div className="login-header">
                  <img src={logo} alt="Logo" />
                  <p>Create your free Fameo account</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Your Password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-check form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="agree"
                      id="agree"
                      checked={formData.agree}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="agree">
                      I agree with the <a href="#">Terms Of Service.</a>
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <button type="submit" className="theme-btn">
                      <i className="far fa-paper-plane" /> Register
                    </button>
                  </div>
                </form>
                <div className="login-footer">
                  <p>
                    Already have an account? <a href="login.html">Login.</a>
                  </p>
                  <div className="social-login">
                    <span className="social-divider">or</span>
                    <p>Continue with social media</p>
                    <div className="social-login-list">
                      <a href="#" className="fb-auth">
                        <i className="fab fa-facebook-f" /> Facebook
                      </a>
                      <a href="#" className="gl-auth">
                        <i className="fab fa-google" /> Google
                      </a>
                      <a href="#" className="tw-auth">
                        <i className="fab fa-x-twitter" /> Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* register area end */}
      </main>
      {/* footer area */}
      <Footer />
      {/* footer area end */}
      {/* scroll-top */}
      <a href="#" id="scroll-top">
        <i className="far fa-arrow-up-from-arc" />
      </a>
      {/* scroll-top end */}
      {/* js */}
    </>
  );
}


export default Register;
