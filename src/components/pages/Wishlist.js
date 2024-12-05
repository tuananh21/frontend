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

function Wishlist() {
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
            style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
          />
          <div className="container">
            <div className="site-breadcrumb-wrap">
              <h4 className="breadcrumb-title">My Wishlist</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <a href="index.html">
                    <i className="far fa-home" /> Home
                  </a>
                </li>
                <li className="active">My Wishlist</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* user dashboard */}
        <div className="user-area bg pt-100 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="sidebar-top">
                    <div className="sidebar-profile-img">
                      <img src="assets/img/account/02.jpg" alt="" />
                      <button type="button" className="profile-img-btn">
                        <i className="far fa-camera" />
                      </button>
                      <input type="file" className="profile-img-file" />
                    </div>
                    <h5>Antoni Jonson</h5>
                    <p>
                      <a
                        href="https://live.themewild.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="bbdad5cfd4d5d2fbdec3dad6cbd7de95d8d4d6"
                      >
                        [email&nbsp;protected]
                      </a>
                    </p>
                  </div>
                  <ul className="sidebar-list">
                    <li>
                      <a href="user-dashboard.html">
                        <i className="far fa-gauge-high" /> Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="user-profile.html">
                        <i className="far fa-user" /> My Profile
                      </a>
                    </li>
                    <li>
                      <a href="order-list.html">
                        <i className="far fa-shopping-bag" /> My Order List{" "}
                        <span className="badge badge-danger">02</span>
                      </a>
                    </li>
                    <li>
                      <a className="active" href="wishlist.html">
                        <i className="far fa-heart" /> My Wishlist{" "}
                        <span className="badge badge-danger">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="address-list.html">
                        <i className="far fa-location-dot" /> Address List
                      </a>
                    </li>
                    <li>
                      <a href="support-ticket.html">
                        <i className="far fa-headset" /> Support Tickets{" "}
                        <span className="badge badge-danger">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="track-order.html">
                        <i className="far fa-map-location-dot" /> Track My Order
                      </a>
                    </li>
                    <li>
                      <a href="payment-method.html">
                        <i className="far fa-wallet" /> Payment Methods
                      </a>
                    </li>
                    <li>
                      <a href="user-notification.html">
                        <i className="far fa-bell" /> Notification{" "}
                        <span className="badge badge-danger">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="user-message.html">
                        <i className="far fa-envelope" /> Messages{" "}
                        <span className="badge badge-danger">02</span>
                      </a>
                    </li>
                    <li>
                      <a href="user-setting.html">
                        <i className="far fa-gear" /> Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-sign-out" /> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="user-wrapper">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="user-card">
                        <h4 className="user-card-title">My Wishlist</h4>
                        <div className="row g-4 mt-20 item-2">
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <span className="type new">New</span>
                                <a href="shop-single.html">
                                  <img src="assets/img/product/02.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <span className="type hot">Hot</span>
                                <a href="shop-single.html">
                                  <img src="assets/img/product/05.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <span className="type oos">Out Of Stock</span>
                                <a href="shop-single.html">
                                  <img src="assets/img/product/09.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <span className="type discount">10% Off</span>
                                <a href="shop-single.html">
                                  <img src="assets/img/product/22.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <del>$120.00</del>
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <span className="type oos">Out Of Stock</span>
                                <a href="shop-single.html">
                                  <img src="assets/img/product/25.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <span className="type new">New</span>
                                <a href="shop-single.html">
                                  <img src="assets/img/product/26.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <a href="shop-single.html">
                                  <img src="assets/img/product/27.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <span className="type">Trending</span>
                                <a href="shop-single.html">
                                  <img src="assets/img/product/24.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="product-item">
                              <div className="product-img">
                                <a href="shop-single.html">
                                  <img src="assets/img/product/12.png" alt="" />
                                </a>
                                <div className="product-action-wrap">
                                  <div className="product-action">
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#quickview"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Quick View"
                                    >
                                      <i className="far fa-eye" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Add To Compare"
                                    >
                                      <i className="far fa-arrows-repeat" />
                                    </a>
                                    <a
                                      href="#"
                                      data-bs-placement="top"
                                      data-tooltip="tooltip"
                                      title="Remove From Wishlist"
                                    >
                                      <i className="far fa-xmark" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3 className="product-title">
                                  <a href="shop-single.html">
                                    Simple Denim Chair
                                  </a>
                                </h3>
                                <div className="product-rate">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="far fa-star" />
                                </div>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>$100.00</span>
                                  </div>
                                  <button
                                    type="button"
                                    className="product-cart-btn"
                                    data-bs-placement="left"
                                    data-tooltip="tooltip"
                                    title="Add To Cart"
                                  >
                                    <i className="far fa-shopping-bag" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* pagination */}
                        <div className="pagination-area mt-4 mb-3">
                          <div aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">
                                    <i className="far fa-angle-double-left" />
                                  </span>
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  aria-label="Next"
                                >
                                  <span aria-hidden="true">
                                    <i className="far fa-angle-double-right" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* pagination end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* user dashboard end */}
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

export default Wishlist;
