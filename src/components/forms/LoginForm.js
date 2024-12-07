import React, { useState } from "react";
import { Link } from "react-router-dom";


const LoginForm = ({ handleLogin, errorMessage }) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const inputDataLogin = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(user);
    };

    return (
        <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={user.email}
                      onChange={inputDataLogin}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Your Password"
                      value={user.password}
                      onChange={inputDataLogin}
                    />
                  </div>
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  <div className="d-flex justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                    <Link href="forgot-password.html" className="forgot-pass">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <button type="submit" className="theme-btn">
                      <i className="far fa-sign-in" /> Login
                    </button>
                  </div>
                </form>
    );
};

export default LoginForm;