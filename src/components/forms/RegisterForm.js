import React, { useState } from "react";
import { registerUser } from "../../services/api";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    username: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [errorBackEnd, setErrorBackEnd] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone Number is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      registerUser(formData)
        .then((data) => {
          if (!data.errors) {
            navigate("/login");
          }
        })
        .catch((error) => {
          setErrorBackEnd(error.errors);
        });
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            name="username"
            placeholder="Your Username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          <p style={{color: "red"}}>{errorBackEnd.find((error) => error.field === 'username')?.message}</p>
       </div>
        <label>First Name</label>
        <input
          type="text"
          className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && (
          <div className="invalid-feedback">{errors.firstName}</div>
        )}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && (<div className="invalid-feedback">{errors.lastName}</div>)}
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        <p style={{color: "red"}}>{errorBackEnd.find((error) => error.field === 'email')?.message}</p>
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        <p style={{color: "red"}}>{errorBackEnd.find((error) => error.field === 'phone')?.message}</p>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          name="password"
          placeholder="Your Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>
      <div className="form-check form-group">
        <input
          className={`form-check-input ${errors.agree ? "is-invalid" : ""}`}
          type="checkbox"
          name="agree"
          id="agree"
          checked={formData.agree}
          onChange={handleInputChange}
        />
        <label className="form-check-label" htmlFor="agree">
          I agree with the <a href="#">Terms Of Service.</a>
        </label>
        {errors.agree && <div className="invalid-feedback">{errors.agree}</div>}
      </div>
      <div className="d-flex align-items-center">
        <button type="submit" className="theme-btn">
          <i className="far fa-paper-plane" /> Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
