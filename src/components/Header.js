import { Link } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import "../assets/css/all-fontawesome.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/jquery-ui.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/style.css";

import logo from "../assets/img/logo/logo.png";

import megabanner from "../assets/img/banner/mega-menu-banner.jpg";

import slider1 from "../assets/img/hero/slider-1.jpg";

import product1 from "../assets/img/product/01.png";
import product2 from "../assets/img/product/02.png";
import product3 from "../assets/img/product/03.png";
import product4 from "../assets/img/product/04.png";
import product5 from "../assets/img/product/05.png";
import product6 from "../assets/img/product/06.png";
import product7 from "../assets/img/product/07.png";
import product8 from "../assets/img/product/08.png";
import product9 from "../assets/img/product/09.png";
import product10 from "../assets/img/product/10.png";
import product11 from "../assets/img/product/11.png";
import product12 from "../assets/img/product/12.png";
import product13 from "../assets/img/product/13.png";
import product14 from "../assets/img/product/14.png";
import product15 from "../assets/img/product/15.png";

function Header() {
  return (
    <header className="header">
      {/* header top */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                <div className="header-top-left">
                  <ul className="header-top-list">
                    <li>
                      <p>
                        <i className="far fa-fire" /> The Biggest Sale Ever 50%
                        Off
                      </p>
                    </li>
                    <li>
                      <Link href="tel:+21236547898">
                        <i className="far fa-headset" /> +2 123 654 7898
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-7">
                <div className="header-top-right">
                  <ul className="header-top-list">
                    <li>
                      <div className="dropdown">
                        <Link
                          href="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="far fa-usd" /> USD
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="#">
                            USD
                          </Link>
                          <Link className="dropdown-item" href="#">
                            EUR
                          </Link>
                          <Link className="dropdown-item" href="#">
                            AUD
                          </Link>
                          <Link className="dropdown-item" href="#">
                            CUD
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown">
                        <Link
                          href="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="far fa-globe-americas" /> EN
                        </Link>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="#">
                            EN
                          </Link>
                          <Link className="dropdown-item" href="#">
                            FR
                          </Link>
                          <Link className="dropdown-item" href="#">
                            DE
                          </Link>
                          <Link className="dropdown-item" href="#">
                            RU
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="social">
                      <div className="header-top-social">
                        <span>Follow Us: </span>
                        <Link href="#">
                          <i className="fab fa-facebook" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-x-twitter" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="#">
                          <i className="fab fa-linkedin" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header top end */}
      {/* navbar */}
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <Link className="navbar-brand" href="index.html">
              <img src={logo} alt="logo" />
            </Link>
            <div className="mobile-menu-right">
              <div className="mobile-menu-btn">
                <Link href="#" className="nav-right-link search-box-outer">
                  <i className="far fa-search" />
                </Link>
                <Link href="wishlist.html" className="nav-right-link">
                  <i className="far fa-heart" />
                  <span>2</span>
                </Link>
                <Link href="shop-cart.html" className="nav-right-link">
                  <i className="far fa-shopping-bag" />
                  <span>5</span>
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link
                  href="index.html"
                  className="offcanvas-brand"
                  id="offcanvasNavbarLabel"
                >
                  <img src={logo} alt="" />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-lg-5">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </Link>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <Link className="dropdown-item" to="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="brand.html">
                          Brands
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Category
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="category.html"
                            >
                              Category One
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="category-2.html"
                            >
                              Category Two
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Authentication
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/login">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="register.html"
                            >
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="forgot-password.html"
                            >
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Extra Pages
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="coming-soon.html"
                            >
                              Coming Soon
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="return.html">
                              Return Policy
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="terms.html">
                              Terms Of Service
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="privacy.html">
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="mail-success.html"
                            >
                              Mail Success
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="team.html">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="affiliate.html">
                          Affiliate
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="gallery.html">
                          Our Gallery
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="contact.html">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="help.html">
                          Help
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="invoice.html">
                          Invoices
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="faq.html">
                          Faq
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="testimonial.html">
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="404.html">
                          404 Error
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Account
                    </Link>
                    <ul className="dropdown-menu fade-down">
                      <li>
                        <Link className="dropdown-item" to="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="user-profile.html"
                        >
                          My Profile
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Orders
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="order-list.html"
                            >
                              Orders List
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="order-detail.html"
                            >
                              Order Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="wishlist.html">
                          My Wishlist
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Address
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="address-list.html"
                            >
                              Address List
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="add-address.html"
                            >
                              Add Address
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Support Tickets
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="support-ticket.html"
                            >
                              Support Tickets
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="ticket-detail.html"
                            >
                              Ticket Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="track-order.html">
                          Track My Order
                        </Link>
                      </li>
                      <li className="dropdown-submenu">
                        <Link
                          className="dropdown-item dropdown-toggle"
                          href="#"
                        >
                          Payment Methods
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              href="payment-method.html"
                            >
                              Payment Methods
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="add-payment.html"
                            >
                              Add Payment
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="user-notification.html"
                        >
                          Notification
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/message">
                          Messages
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="user-setting.html"
                        >
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item mega-menu dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Menu
                    </Link>
                    <div className="dropdown-menu fade-down">
                      <div className="mega-content">
                        <div className="container-fluid px-lg-0">
                          <div className="row">
                            <div className="col-12 col-lg-2">
                              <h5 className="mega-menu-title">Furniture</h5>
                              <ul className="mega-menu-item">
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Bedroom
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Living Room
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Bathroom
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Decoration
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Office
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Kitchen
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-2">
                              <h5 className="mega-menu-title">Furniture</h5>
                              <ul className="mega-menu-item">
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Storage
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Lighting
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Sofa
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Chair
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Armchair
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Table
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-2">
                              <h5 className="mega-menu-title">Furniture</h5>
                              <ul className="mega-menu-item">
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Bedroom
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Living Room
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Bathroom
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Decoration
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Office
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Kitchen
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-2">
                              <h5 className="mega-menu-title">Furniture</h5>
                              <ul className="mega-menu-item">
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Bedroom
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Living Room
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Bathroom
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Decoration
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Office
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item"
                                    href="shop-grid.html"
                                  >
                                    Kitchen
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="mega-menu-img">
                                <Link href="#">
                                  <img src={megabanner} alt="" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/shoplist"
                      data-bs-toggle="dropdown"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="contact.html">
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* nav-right */}
                <div className="nav-right">
                  <ul className="nav-right-list">
                    <li>
                      <Link href="#" className="list-link search-box-outer">
                        <i className="far fa-search" />
                      </Link>
                    </li>
                    <li>
                      <Link href="wishlist.html" className="list-link">
                        <i className="far fa-heart" />
                        <span>2</span>
                      </Link>
                    </li>
                    <li className="dropdown-cart">
                      <Link href="#" className="list-link shop-cart">
                        <i className="far fa-shopping-bag" />
                        <span>5</span>
                      </Link>
                      <div className="dropdown-cart-menu">
                        <div className="dropdown-cart-header">
                          <span>03 Items</span>
                          <Link href="shop-cart.html">View Cart</Link>
                        </div>
                        <ul className="dropdown-cart-list">
                          <li>
                            <div className="dropdown-cart-item">
                              <div className="cart-img">
                                <Link href="#">
                                  <img src={product6} alt="#" />
                                </Link>
                              </div>
                              <div className="cart-info">
                                <h4>
                                  <Link href="#">Living Room Chair</Link>
                                </h4>
                                <p className="cart-qty">
                                  1x -{" "}
                                  <span className="cart-amount">$200.00</span>
                                </p>
                              </div>
                              <Link
                                href="#"
                                className="cart-remove"
                                title="Remove this item"
                              >
                                <i className="far fa-times-circle" />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="dropdown-cart-item">
                              <div className="cart-img">
                                <Link href="#">
                                  <img src={product14} alt="#" />
                                </Link>
                              </div>
                              <div className="cart-info">
                                <h4>
                                  <Link href="#">Living Room Chair</Link>
                                </h4>
                                <p className="cart-qty">
                                  1x -{" "}
                                  <span className="cart-amount">$120.00</span>
                                </p>
                              </div>
                              <Link
                                href="#"
                                className="cart-remove"
                                title="Remove this item"
                              >
                                <i className="far fa-times-circle" />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="dropdown-cart-item">
                              <div className="cart-img">
                                <Link href="#">
                                  <img src={product15} alt="#" />
                                </Link>
                              </div>
                              <div className="cart-info">
                                <h4>
                                  <Link href="#">Living Room Chair</Link>
                                </h4>
                                <p className="cart-qty">
                                  1x -{" "}
                                  <span className="cart-amount">$330.00</span>
                                </p>
                              </div>
                              <Link
                                href="#"
                                className="cart-remove"
                                title="Remove this item"
                              >
                                <i className="far fa-times-circle" />
                              </Link>
                            </div>
                          </li>
                        </ul>
                        <div className="dropdown-cart-bottom">
                          <div className="dropdown-cart-total">
                            <span>Total</span>
                            <span className="total-amount">$650.00</span>
                          </div>
                          <Link href="shop-checkout.html" className="theme-btn">
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="nav-right-btn">
                    <Link to="/login" className="theme-btn theme-btn2">
                      <span className="far fa-user-tie" /> Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* navbar end */}
    </header>
  );
}

export default Header;
