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
import ViewShopSingle from "../Lists/ViewShopSingle";
import LogoImages from "../../exportImages/LogoImages";

function Product() {
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
                            <h4 className="breadcrumb-title">Shop Single</h4>
                            <ul className="breadcrumb-menu">
                                <li>
                                    <a href="index.html">
                                        <i className="far fa-home" /> Home
                                    </a>
                                </li>
                                <li className="active">Shop Single</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* breadcrumb end */}
                {/* shop single */}
                <ViewShopSingle/>
                {/* shop single end */}
            </main>

      {/* footer area */}
      <Footer />
      {/* footer area end */}
      {/* scroll-top */}
      <a href="#" id="scroll-top">
        <i className="far fa-arrow-up-from-arc" />
      </a>
      {/* scroll-top end */}
      {/* modal quick shop*/}
      <div
        className="modal quickview fade"
        id="quickview"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="quickview"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="far fa-xmark" />
            </button>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <img src="assets/img/product/04.png" alt="#" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="quickview-content">
                    <h4 className="quickview-title">Simple Denim Chair</h4>
                    <div className="quickview-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                      <span className="rating-count">
                        {" "}
                        (4 Customer Reviews)
                      </span>
                    </div>
                    <div className="quickview-price">
                      <h5>
                        <del>$860</del>
                        <span>$740</span>
                      </h5>
                    </div>
                    <ul className="quickview-list">
                      <li>
                        Brand:<span>Ricordi</span>
                      </li>
                      <li>
                        Category:<span>Living Room</span>
                      </li>
                      <li>
                        Stock:<span className="stock">Available</span>
                      </li>
                      <li>
                        Code:<span>789FGSA</span>
                      </li>
                    </ul>
                    <div className="quickview-cart">
                      <a href="#" className="theme-btn">
                        Add to cart
                      </a>
                    </div>
                    <div className="quickview-social">
                      <span>Share:</span>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-x-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal quick shop end */}
      {/* js */}
    </>
  );
}

export default Product;
