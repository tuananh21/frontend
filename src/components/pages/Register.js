import { Link } from "react-router-dom";
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
import RegisterForm from "../forms/RegisterForm";

const Register = () => {

  return (
    <>
      <Header />
      <main className="main">
        <div className="site-breadcrumb">
          <div
            className="site-breadcrumb-bg"
            style={{ background: `url(${LogoImages.breadcrumbImage})` }}
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
                  <img src={LogoImages.logo} alt="Logo" />
                  <p>Create your free Fameo account</p>
                </div>
                <RegisterForm/>
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
