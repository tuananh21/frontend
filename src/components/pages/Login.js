import { Link, useNavigate } from "react-router-dom";
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
import LogoImages from "../../exportImages/LogoImages";
import LoginForm from "../forms/LoginForm";
import { useState } from "react";
import { login } from "../../services/api";


function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (user) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)) {
      setErrorMessage("Email không đúng định dạng");
      return;
    }

    try {
      const data = await login(user);
      localStorage.setItem('token', data.token);
      navigate('/'); 
    } catch (error) {
      setErrorMessage(error.message); 
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
            style={{ background: `url(${LogoImages.breadcrumbImage})` }}
          />
          <div className="container">
            <div className="site-breadcrumb-wrap">
              <h4 className="breadcrumb-title">Login</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link to="/">
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
                {/* loginform */}
                <LoginForm handleLogin={handleLogin} errorMessage={errorMessage} />
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
      </main >
      {/* footer area */}
      < Footer />
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
