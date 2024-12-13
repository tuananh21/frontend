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
import ViewCartProducts from "../Lists/ViewCartProducts";
import ViewCartSummary from "../Lists/ViewCartSummary";


function Cart() {
  return (
    <>
      {/* Header Area */}
      <Header />
      {/* Main Content */}
      <main className="main">
        {/* Breadcrumb */}
        <div className="site-breadcrumb">
          <div
            className="site-breadcrumb-bg"
            style={{ background: `url(${LogoImages.breadcrumbImage})` }}
          />
          <div className="container">
            <div className="site-breadcrumb-wrap">
              <h4 className="breadcrumb-title">Shop Cart</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link to="/">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Shop Cart</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Shop Cart */}
        <div className="shop-cart py-90">
          <div className="container">
            <div className="shop-cart-wrap">
              <ViewCartProducts/>
            </div>
          </div>
        </div>
      </main>
      {/* ooter Area */}
      <Footer />
    </>
  );
}

export default Cart;
