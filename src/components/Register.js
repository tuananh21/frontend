import { Link } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import "../assets/css/all-fontawesome.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/jquery-ui.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/style.css";

function Register() {
  return (
    <>
      {/* header area */}
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
                        <a href="https://live.themewild.com/cdn-cgi/l/email-protection#137a7d757c53766b727e637f763d707c7e">
                          <i className="far fa-envelopes" />
                          <span
                            className="__cf_email__"
                            data-cfemail="96fff8f0f9d6f3eef7fbe6faf3b8f5f9fb"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+21236547898">
                          <i className="far fa-headset" /> +2 123 654 7898
                        </a>
                      </li>
                      <li className="help">
                        <a href="#">
                          <i className="far fa-comment-question" /> Need Help?
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-7">
                  <div className="header-top-right">
                    <ul className="header-top-list">
                      <li>
                        <a href="#">
                          <i className="far fa-sign-in" /> Login
                        </a>
                      </li>
                      <li>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="far fa-usd" /> USD
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              USD
                            </a>
                            <a className="dropdown-item" href="#">
                              EUR
                            </a>
                            <a className="dropdown-item" href="#">
                              AUD
                            </a>
                            <a className="dropdown-item" href="#">
                              CUD
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="far fa-globe-americas" /> EN
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              EN
                            </a>
                            <a className="dropdown-item" href="#">
                              FR
                            </a>
                            <a className="dropdown-item" href="#">
                              DE
                            </a>
                            <a className="dropdown-item" href="#">
                              RU
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="social">
                        <div className="header-top-social">
                          <span>Follow Us: </span>
                          <a href="#">
                            <i className="fab fa-facebook" />
                          </a>
                          <a href="#">
                            <i className="fab fa-x-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin" />
                          </a>
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
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </a>
              <div className="mobile-menu-right">
                <div className="mobile-menu-btn">
                  <a href="#" className="nav-right-link search-box-outer">
                    <i className="far fa-search" />
                  </a>
                  <a href="wishlist.html" className="nav-right-link">
                    <i className="far fa-heart" />
                    <span>2</span>
                  </a>
                  <a href="shop-cart.html" className="nav-right-link">
                    <i className="far fa-shopping-bag" />
                    <span>5</span>
                  </a>
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
                  <a
                    href="index.html"
                    className="offcanvas-brand"
                    id="offcanvasNavbarLabel"
                  >
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
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
                      <a
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <a className="dropdown-item" href="index.html">
                            Home Demo 01
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-2.html">
                            Home Demo 02
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-3.html">
                            Home Demo 03
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <a className="dropdown-item" href="about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="brand.html">
                            Brands
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Category
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="category.html">
                                Category One
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="category-2.html"
                              >
                                Category Two
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Authentication
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="login.html">
                                Login
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="register.html">
                                Register
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="forgot-password.html"
                              >
                                Forgot Password
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Extra Pages
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="coming-soon.html"
                              >
                                Coming Soon
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="return.html">
                                Return Policy
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="terms.html">
                                Terms Of Service
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="privacy.html">
                                Privacy Policy
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="mail-success.html"
                              >
                                Mail Success
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="team.html">
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="affiliate.html">
                            Affiliate
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="gallery.html">
                            Our Gallery
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="contact.html">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="help.html">
                            Help
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="invoice.html">
                            Invoices
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="faq.html">
                            Faq
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="testimonial.html">
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="404.html">
                            404 Error
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Account
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <a
                            className="dropdown-item"
                            href="user-dashboard.html"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="user-profile.html">
                            My Profile
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Orders
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="order-list.html"
                              >
                                Orders List
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="order-detail.html"
                              >
                                Order Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="wishlist.html">
                            My Wishlist
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Address
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="address-list.html"
                              >
                                Address List
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="add-address.html"
                              >
                                Add Address
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Support Tickets
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="support-ticket.html"
                              >
                                Support Tickets
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="ticket-detail.html"
                              >
                                Ticket Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="track-order.html">
                            Track My Order
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Payment Methods
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="payment-method.html"
                              >
                                Payment Methods
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="add-payment.html"
                              >
                                Add Payment
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="user-notification.html"
                          >
                            Notification
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="user-message.html">
                            Messages
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="user-setting.html">
                            Settings
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item mega-menu dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Menu
                      </a>
                      <div className="dropdown-menu fade-down">
                        <div className="mega-content">
                          <div className="container-fluid px-lg-0">
                            <div className="row">
                              <div className="col-12 col-lg-2">
                                <h5 className="mega-menu-title">Furniture</h5>
                                <ul className="mega-menu-item">
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Bedroom
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Living Room
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Bathroom
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Decoration
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Office
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Kitchen
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-lg-2">
                                <h5 className="mega-menu-title">Furniture</h5>
                                <ul className="mega-menu-item">
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Storage
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Lighting
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Sofa
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Chair
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Armchair
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Table
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-lg-2">
                                <h5 className="mega-menu-title">Furniture</h5>
                                <ul className="mega-menu-item">
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Bedroom
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Living Room
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Bathroom
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Decoration
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Office
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Kitchen
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-lg-2">
                                <h5 className="mega-menu-title">Furniture</h5>
                                <ul className="mega-menu-item">
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Bedroom
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Living Room
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Bathroom
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Decoration
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Office
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-grid.html"
                                    >
                                      Kitchen
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-lg-4">
                                <div className="mega-menu-img">
                                  <a href="#">
                                    <img
                                      src="assets/img/banner/mega-menu-banner.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Shop
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Shop Grid
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-grid.html"
                              >
                                Shop Grid One
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-grid-2.html"
                              >
                                Shop Grid Two
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Shop List
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-list.html"
                              >
                                Shop List One
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-list-2.html"
                              >
                                Shop List Two
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="shop-search.html">
                            Shop Search
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="shop-cart.html">
                            Shop Cart
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-checkout.html"
                          >
                            Checkout
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="shop-checkout-complete.html"
                          >
                            Checkout Complete
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="shop-single.html">
                            Shop Single
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="shop-compare.html">
                            Shop Compare
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <a className="dropdown-item" href="blog-grid.html">
                            Blog Grid
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-grid-sidebar.html"
                          >
                            Blog Grid Sidebar
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-single.html">
                            Blog Single
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-single-sidebar.html"
                          >
                            Blog Single Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                  {/* nav-right */}
                  <div className="nav-right">
                    <ul className="nav-right-list">
                      <li>
                        <a href="#" className="list-link search-box-outer">
                          <i className="far fa-search" />
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html" className="list-link">
                          <i className="far fa-heart" />
                          <span>2</span>
                        </a>
                      </li>
                      <li className="dropdown-cart">
                        <a href="#" className="list-link shop-cart">
                          <i className="far fa-shopping-bag" />
                          <span>5</span>
                        </a>
                        <div className="dropdown-cart-menu">
                          <div className="dropdown-cart-header">
                            <span>03 Items</span>
                            <a href="shop-cart.html">View Cart</a>
                          </div>
                          <ul className="dropdown-cart-list">
                            <li>
                              <div className="dropdown-cart-item">
                                <div className="cart-img">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/06.png"
                                      alt="#"
                                    />
                                  </a>
                                </div>
                                <div className="cart-info">
                                  <h4>
                                    <a href="#">Living Room Chair</a>
                                  </h4>
                                  <p className="cart-qty">
                                    1x -{" "}
                                    <span className="cart-amount">$200.00</span>
                                  </p>
                                </div>
                                <a
                                  href="#"
                                  className="cart-remove"
                                  title="Remove this item"
                                >
                                  <i className="far fa-times-circle" />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="dropdown-cart-item">
                                <div className="cart-img">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/14.png"
                                      alt="#"
                                    />
                                  </a>
                                </div>
                                <div className="cart-info">
                                  <h4>
                                    <a href="#">Living Room Chair</a>
                                  </h4>
                                  <p className="cart-qty">
                                    1x -{" "}
                                    <span className="cart-amount">$120.00</span>
                                  </p>
                                </div>
                                <a
                                  href="#"
                                  className="cart-remove"
                                  title="Remove this item"
                                >
                                  <i className="far fa-times-circle" />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="dropdown-cart-item">
                                <div className="cart-img">
                                  <a href="#">
                                    <img
                                      src="assets/img/product/15.png"
                                      alt="#"
                                    />
                                  </a>
                                </div>
                                <div className="cart-info">
                                  <h4>
                                    <a href="#">Living Room Chair</a>
                                  </h4>
                                  <p className="cart-qty">
                                    1x -{" "}
                                    <span className="cart-amount">$330.00</span>
                                  </p>
                                </div>
                                <a
                                  href="#"
                                  className="cart-remove"
                                  title="Remove this item"
                                >
                                  <i className="far fa-times-circle" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <div className="dropdown-cart-bottom">
                            <div className="dropdown-cart-total">
                              <span>Total</span>
                              <span className="total-amount">$650.00</span>
                            </div>
                            <a href="shop-checkout.html" className="theme-btn">
                              Checkout
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* navbar end */}
      </header>
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
              <h4 className="breadcrumb-title">Register</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <a href="index.html">
                    <i className="far fa-home" /> Home
                  </a>
                </li>
                <li className="active">Register</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* register area */}
        <div className="login-area py-100">
          <div className="container">
            <div className="col-md-5 mx-auto">
              <div className="login-form">
                <div className="login-header">
                  <img src="assets/img/logo/logo.png" alt="" />
                  <p>Create your free fameo account</p>
                </div>
                <form action="#">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
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
                  <div className="form-check form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="agree"
                    />
                    <label className="form-check-label" htmlFor="agree">
                      I agree with the <a href="#">Terms Of Service.</a>
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <button type="submit" className="theme-btn">
                      <i className="far fa-paper-plane" /> Register
                    </button>
                  </div>
                </form>
                <div className="login-footer">
                  <p>
                    Already have an account? <a href="login.html">Login.</a>
                  </p>
                  <div className="social-login">
                    <span className="social-divider">or</span>
                    <p>Continue with social media</p>
                    <div className="social-login-list">
                      <a href="#" className="fb-auth">
                        <i className="fab fa-facebook-f" /> Facebook
                      </a>
                      <a href="#" className="gl-auth">
                        <i className="fab fa-google" /> Google
                      </a>
                      <a href="#" className="tw-auth">
                        <i className="fab fa-x-twitter" /> Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* register area end */}
      </main>
      {/* footer area */}
      <footer className="footer-area ft-bg">
        <div className="footer-widget">
          <div className="container">
            <div className="row footer-widget-wrapper pt-100 pb-40">
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box about-us">
                  <a href="index.html" className="footer-logo">
                    <img src="assets/img/logo/logo-light.png" alt="" />
                  </a>
                  <p className="mb-3">
                    We are many variations of the passages available but the
                    majoro have suffered alteration injected.
                  </p>
                  <ul className="footer-contact">
                    <li>
                      <a href="tel:+21236547898">
                        <i className="far fa-phone" />
                        +2 123 654 7898
                      </a>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      25/B Milford Road, New York
                    </li>
                    <li>
                      <a href="https://live.themewild.com/cdn-cgi/l/email-protection#3e575058517e5b465f534e525b105d5153">
                        <i className="far fa-envelope" />
                        <span
                          className="__cf_email__"
                          data-cfemail="c6afa8a0a986a3bea7abb6aaa3e8a5a9ab"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="far fa-clock" />
                      Mon-Fri (9.00AM - 8.00PM)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Quick Links</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="help.html">Delivery Info</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="blog.html">Update News</a>
                    </li>
                    <li>
                      <a href="testimonial.html">Our Testimonials</a>
                    </li>
                    <li>
                      <a href="terms.html">Terms Of Service</a>
                    </li>
                    <li>
                      <a href="privacy.html">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Browse Category</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="shop-grid.html">Bedroom</a>
                    </li>
                    <li>
                      <a href="shop-grid.html">Office</a>
                    </li>
                    <li>
                      <a href="shop-grid.html">Living Room</a>
                    </li>
                    <li>
                      <a href="shop-grid.html">Bathroom</a>
                    </li>
                    <li>
                      <a href="shop-grid.html">Decoration</a>
                    </li>
                    <li>
                      <a href="shop-grid.html">Kitchen</a>
                    </li>
                    <li>
                      <a href="shop-grid.html">Armchair</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Support Center</h4>
                  <ul className="footer-list">
                    <li>
                      <a href="faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="help.html">How To Buy</a>
                    </li>
                    <li>
                      <a href="help.html">Support Center</a>
                    </li>
                    <li>
                      <a href="track-order.html">Track Your Order</a>
                    </li>
                    <li>
                      <a href="return.html">Returns Policy</a>
                    </li>
                    <li>
                      <a href="affiliate.html">Our Affiliates</a>
                    </li>
                    <li>
                      <a href="contact.html">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Get Mobile App</h4>
                  <p>
                    Fameo App is now available on App Store &amp; Google Play.
                  </p>
                  <div className="footer-download">
                    <h5>Download Our Mobile App</h5>
                    <div className="footer-download-btn">
                      <a href="#">
                        <i className="fab fa-google-play" />
                        <div className="download-btn-info">
                          <span>Get It On</span>
                          <h6>Google Play</h6>
                        </div>
                      </a>
                      <a href="#">
                        <i className="fab fa-app-store" />
                        <div className="download-btn-info">
                          <span>Get It On</span>
                          <h6>App Store</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="footer-payment mt-20">
                    <span>We Accept:</span>
                    <img src="assets/img/payment/visa.svg" alt="" />
                    <img src="assets/img/payment/mastercard.svg" alt="" />
                    <img src="assets/img/payment/amex.svg" alt="" />
                    <img src="assets/img/payment/discover.svg" alt="" />
                    <img src="assets/img/payment/paypal.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="copyright-wrap">
              <div className="row">
                <div className="col-12 col-lg-6 align-self-center">
                  <p className="copyright-text">
                    © Copyright <span id="date" />{" "}
                    <a href="index.html"> Fameo </a> All Rights Reserved.
                  </p>
                </div>
                <div className="col-12 col-lg-6 align-self-center">
                  <div className="footer-social">
                    <span>Follow Us:</span>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-x-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
      {/* scroll-top */}
      <a href="#" id="scroll-top">
        <i className="far fa-arrow-up-from-arc" />
      </a>
      {/* scroll-top end */}
      {/* js */}
    </>
  );
}

export default Register;
