import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/all-fontawesome.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/jquery-ui.min.css";
import "../../assets/css/magnific-popup.min.css";
import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/nice-select.min.css";
import "../../assets/css/style.css";
import Header from "../Header";
import Footer from "../Footer";

import logo from "../../assets/img/logo/logo.png";
import breadcrumb1 from "../../assets/img/breadcrumb/01.jpg";

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
      // Gửi dữ liệu người dùng đến API backend
      const response = await axios.post("http://localhost:8080/api/users", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      if (response.status === 201) {
        alert("Registration successful!");
        // Reset form sau khi đăng ký thành công
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          agree: false,
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <>
      <Header />
      <main className="main">
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
                  <Link to="/">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Register</li>
              </ul>
            </div>
          </div>
        </div>
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
                      type="text"
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
                      I agree with the <Link to="#">Terms Of Service.</Link>
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
                    Already have an account? <Link to="/login">Login.</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
