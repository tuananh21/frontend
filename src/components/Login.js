import { Link } from "react-router-dom";
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

import logo from "../assets/img/logo/logo.png"
import megabanner from "../assets/img/banner/mega-menu-banner.jpg"
import breadcrumb1 from "../assets/img/breadcrumb/01.jpg"

function Login() {
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
              <h4 className="breadcrumb-title">Login</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link href="index.html">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Login</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* login area */}
        <div className="login-area py-90">
          <div className="container">
            <div className="col-md-7 col-lg-5 mx-auto">
              <div className="login-form">
                <div className="login-header">
                  <img src="assets/img/logo/logo.png" alt="" />
                  <p>Login with your fameo account</p>
                </div>
                <form action="#">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                    />
                  </div>
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
                <div className="login-footer">
                  <p>
                    Don't have an account? <Link to="/register">Register.</Link>
                  </p>
                  <div className="social-login">
                    <span className="social-divider">or</span>
                    <p>Continue with social media</p>
                    <div className="social-login-list">
                      <Link href="#" className="fb-auth">
                        <i className="fab fa-facebook-f" /> Facebook
                      </Link>
                      <Link href="#" className="gl-auth">
                        <i className="fab fa-google" /> Google
                      </Link>
                      <Link href="#" className="tw-auth">
                        <i className="fab fa-x-twitter" /> Twitter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* login area end */}
      </main>
      {/* footer area */}
      <Footer />
      {/* footer area end */}
      {/* scroll-top */}
      <Link href="#" id="scroll-top">
        <i className="far fa-arrow-up-from-arc" />
      </Link>
      {/* scroll-top end */}
      {/* js */}
    </>
  );
}

export default Login;
