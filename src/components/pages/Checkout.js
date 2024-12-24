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

import breadcrumb1 from "../../assets/img/breadcrumb/01.jpg";
import ViewOrderSummary from "../Lists/ViewOrderSummary";
import CheckoutForm from "../forms/CheckoutForm";

function Checkout() {

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
              <h4 className="breadcrumb-title">Shop Checkout</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link to="/">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Shop Checkout</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* shop checkout */}
        <div className="shop-checkout py-90">
          <div className="container">
            <div className="shop-checkout-wrap">
              <div className="row">
                {/* checkout form */}
                <CheckoutForm/>
                {/* checkout form end */}

                {/* checkout summary */}
                <ViewOrderSummary />
                {/* checkout summary end */}
              </div>
            </div>
          </div>
        </div>
        {/* shop checkout end */}
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

export default Checkout;
