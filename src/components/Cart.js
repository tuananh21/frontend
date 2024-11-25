import { Link } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import "../assets/css/all-fontawesome.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/jquery-ui.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/style.css";

function Cart() {
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
                        <Link href="https://live.themewild.com/cdn-cgi/l/email-protection#d3babdb5bc93b6abb2bea3bfb6fdb0bcbe">
                          <i className="far fa-envelopes" />
                          <span
                            className="__cf_email__"
                            data-cfemail="20494e464f604558414d504c450e434f4d"
                          >
                            [email&nbsp;protected]
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="tel:+21236547898">
                          <i className="far fa-headset" /> +2 123 654 7898
                        </Link>
                      </li>
                      <li className="help">
                        <Link href="#">
                          <i className="far fa-comment-question" /> Need Help?
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-7">
                  <div className="header-top-right">
                    <ul className="header-top-list">
                      <li>
                        <Link href="#">
                          <i className="far fa-sign-in" /> Login
                        </Link>
                      </li>
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
                <img src="assets/img/logo/logo.png" alt="logo" />
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
                    <img src="assets/img/logo/logo.png" alt="" />
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
                        className="nav-link dropdown-toggle active"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Home
                      </Link>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <Link className="dropdown-item" href="index.html">
                            Home Demo 01
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="index-2.html">
                            Home Demo 02
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="index-3.html">
                            Home Demo 03
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="about.html">
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
                          <Link className="dropdown-item" href="about.html">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="brand.html">
                            Brands
                          </Link>
                        </li>
                        <li className="dropdown-submenu">
                          <Link className="dropdown-item dropdown-toggle" href="#">
                            Category
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" href="category.html">
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
                          <Link className="dropdown-item dropdown-toggle" href="#">
                            Authentication
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" href="login.html">
                                Login
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" href="register.html">
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
                          <Link className="dropdown-item dropdown-toggle" href="#">
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
                          <Link
                            className="dropdown-item"
                            href="user-dashboard.html"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="user-profile.html">
                            My Profile
                          </Link>
                        </li>
                        <li className="dropdown-submenu">
                          <Link className="dropdown-item dropdown-toggle" href="#">
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
                          <Link className="dropdown-item dropdown-toggle" href="#">
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
                          <Link className="dropdown-item dropdown-toggle" href="#">
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
                          <Link className="dropdown-item dropdown-toggle" href="#">
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
                          <Link className="dropdown-item" href="user-message.html">
                            Messages
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="user-setting.html">
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
                                    <img
                                      src="assets/img/banner/mega-menu-banner.jpg"
                                      alt=""
                                    />
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
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Shop
                      </Link>
                      <ul className="dropdown-menu fade-down">
                        <li className="dropdown-submenu">
                          <Link className="dropdown-item dropdown-toggle" href="#">
                            Shop Grid
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="shop-grid.html"
                              >
                                Shop Grid One
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="shop-grid-2.html"
                              >
                                Shop Grid Two
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <Link className="dropdown-item dropdown-toggle" href="#">
                            Shop List
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                href="shop-list.html"
                              >
                                Shop List One
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                href="shop-list-2.html"
                              >
                                Shop List Two
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="shop-search.html">
                            Shop Search
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="shop-cart.html">
                            Shop Cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="shop-checkout.html"
                          >
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="shop-checkout-complete.html"
                          >
                            Checkout Complete
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="shop-single.html">
                            Shop Single
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="shop-compare.html">
                            Shop Compare
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
                        Blog
                      </Link>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <Link className="dropdown-item" href="blog-grid.html">
                            Blog Grid
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="blog-grid-sidebar.html"
                          >
                            Blog Grid Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="blog-single.html">
                            Blog Single
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            href="blog-single-sidebar.html"
                          >
                            Blog Single Sidebar
                          </Link>
                        </li>
                      </ul>
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
                                    <img
                                      src="assets/img/product/06.png"
                                      alt="#"
                                    />
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
                                    <img
                                      src="assets/img/product/14.png"
                                      alt="#"
                                    />
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
                                    <img
                                      src="assets/img/product/15.png"
                                      alt="#"
                                    />
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
              <h4 className="breadcrumb-title">Shop Cart</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link href="index.html">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Shop Cart</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* shop cart */}
        <div className="shop-cart py-90">
          <div className="container">
            <div className="shop-cart-wrap">
              <div className="row">
                <div className="col-lg-8">
                  <div className="cart-table">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sub Total</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="shop-cart-img">
                                <Link href="#">
                                  <img src="assets/img/product/01.png" alt="" />
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-content">
                                <h5 className="shop-cart-name">
                                  <Link href="#">Simple Denim Chair</Link>
                                </h5>
                                <div className="shop-cart-info">
                                  <p>
                                    <span>Type:</span>Armchair
                                  </p>
                                  <p>
                                    <span>Color:</span>Orange
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-price">
                                <span>$1,500</span>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-qty">
                                <button className="minus-btn">
                                  <i className="fal fa-minus" />
                                </button>
                                <input
                                  className="quantity"
                                  type="text"
                                  defaultValue={1}
                                  disabled=""
                                />
                                <button className="plus-btn">
                                  <i className="fal fa-plus" />
                                </button>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-subtotal">
                                <span>$1,500</span>
                              </div>
                            </td>
                            <td>
                              <Link href="#" className="shop-cart-remove">
                                <i className="far fa-times" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="shop-cart-img">
                                <Link href="#">
                                  <img src="assets/img/product/15.png" alt="" />
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-content">
                                <h5 className="shop-cart-name">
                                  <Link href="#">Simple Denim Chair</Link>
                                </h5>
                                <div className="shop-cart-info">
                                  <p>
                                    <span>Type:</span>Armchair
                                  </p>
                                  <p>
                                    <span>Color:</span>Orange
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-price">
                                <span>$1,500</span>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-qty">
                                <button className="minus-btn">
                                  <i className="fal fa-minus" />
                                </button>
                                <input
                                  className="quantity"
                                  type="text"
                                  defaultValue={1}
                                  disabled=""
                                />
                                <button className="plus-btn">
                                  <i className="fal fa-plus" />
                                </button>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-subtotal">
                                <span>$1,500</span>
                              </div>
                            </td>
                            <td>
                              <Link href="#" className="shop-cart-remove">
                                <i className="far fa-times" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="shop-cart-img">
                                <Link href="#">
                                  <img src="assets/img/product/03.png" alt="" />
                                </Link>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-content">
                                <h5 className="shop-cart-name">
                                  <Link href="#">Simple Denim Chair</Link>
                                </h5>
                                <div className="shop-cart-info">
                                  <p>
                                    <span>Type:</span>Armchair
                                  </p>
                                  <p>
                                    <span>Color:</span>Orange
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-price">
                                <span>$1,500</span>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-qty">
                                <button className="minus-btn">
                                  <i className="fal fa-minus" />
                                </button>
                                <input
                                  className="quantity"
                                  type="text"
                                  defaultValue={1}
                                  disabled=""
                                />
                                <button className="plus-btn">
                                  <i className="fal fa-plus" />
                                </button>
                              </div>
                            </td>
                            <td>
                              <div className="shop-cart-subtotal">
                                <span>$1,500</span>
                              </div>
                            </td>
                            <td>
                              <Link href="#" className="shop-cart-remove">
                                <i className="far fa-times" />
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="shop-cart-footer">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="shop-cart-coupon">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Coupon Code"
                            />
                            <button className="theme-btn" type="submit">
                              Apply Coupon
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-6">
                        <div className="shop-cart-btn text-md-end">
                          <Link href="#" className="theme-btn">
                            <span className="fas fa-arrow-left" /> Continue
                            Shopping
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="shop-cart-summary">
                    <h5>Cart Summary</h5>
                    <ul>
                      <li>
                        <strong>Sub Total:</strong> <span>$4,500.00</span>
                      </li>
                      <li>
                        <strong>Discount:</strong> <span>$5.00</span>
                      </li>
                      <li>
                        <strong>Shipping:</strong> <span>Free</span>
                      </li>
                      <li>
                        <strong>Taxes:</strong> <span>$25.00</span>
                      </li>
                      <li className="shop-cart-total">
                        <strong>Total:</strong> <span>$4,520.00</span>
                      </li>
                    </ul>
                    <div className="text-end mt-40">
                      <Link href="#" className="theme-btn">
                        Checkout Now
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop cart end */}
      </main>
      {/* footer area */}
      <footer className="footer-area ft-bg">
        <div className="footer-widget">
          <div className="container">
            <div className="row footer-widget-wrapper pt-100 pb-40">
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget-box about-us">
                  <Link href="index.html" className="footer-logo">
                    <img src="assets/img/logo/logo-light.png" alt="" />
                  </Link>
                  <p className="mb-3">
                    We are many variations of the passages available but the
                    majoro have suffered alteration injected.
                  </p>
                  <ul className="footer-contact">
                    <li>
                      <Link href="tel:+21236547898">
                        <i className="far fa-phone" />
                        +2 123 654 7898
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-map-marker-alt" />
                      25/B Milford Road, New York
                    </li>
                    <li>
                      <Link href="https://live.themewild.com/cdn-cgi/l/email-protection#bfd6d1d9d0ffdac7ded2cfd3da91dcd0d2">
                        <i className="far fa-envelope" />
                        <span
                          className="__cf_email__"
                          data-cfemail="761f18101936130e171b061a135815191b"
                        >
                          [email&nbsp;protected]
                        </span>
                      </Link>
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
                      <Link href="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link href="help.html">Delivery Info</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="blog.html">Update News</Link>
                    </li>
                    <li>
                      <Link href="testimonial.html">Our Testimonials</Link>
                    </li>
                    <li>
                      <Link href="terms.html">Terms Of Service</Link>
                    </li>
                    <li>
                      <Link href="privacy.html">Privacy policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Browse Category</h4>
                  <ul className="footer-list">
                    <li>
                      <Link href="shop-grid.html">Bedroom</Link>
                    </li>
                    <li>
                      <Link href="shop-grid.html">Office</Link>
                    </li>
                    <li>
                      <Link href="shop-grid.html">Living Room</Link>
                    </li>
                    <li>
                      <Link href="shop-grid.html">Bathroom</Link>
                    </li>
                    <li>
                      <Link href="shop-grid.html">Decoration</Link>
                    </li>
                    <li>
                      <Link href="shop-grid.html">Kitchen</Link>
                    </li>
                    <li>
                      <Link href="shop-grid.html">Armchair</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget-box list">
                  <h4 className="footer-widget-title">Support Center</h4>
                  <ul className="footer-list">
                    <li>
                      <Link href="faq.html">FAQ's</Link>
                    </li>
                    <li>
                      <Link href="help.html">How To Buy</Link>
                    </li>
                    <li>
                      <Link href="help.html">Support Center</Link>
                    </li>
                    <li>
                      <Link href="track-order.html">Track Your Order</Link>
                    </li>
                    <li>
                      <Link href="return.html">Returns Policy</Link>
                    </li>
                    <li>
                      <Link href="affiliate.html">Our Affiliates</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Sitemap</Link>
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
                      <Link href="#">
                        <i className="fab fa-google-play" />
                        <div className="download-btn-info">
                          <span>Get It On</span>
                          <h6>Google Play</h6>
                        </div>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-app-store" />
                        <div className="download-btn-info">
                          <span>Get It On</span>
                          <h6>App Store</h6>
                        </div>
                      </Link>
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
                    <Link href="index.html"> Fameo </Link> All Rights Reserved.
                  </p>
                </div>
                <div className="col-12 col-lg-6 align-self-center">
                  <div className="footer-social">
                    <span>Follow Us:</span>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-x-twitter" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
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

export default Cart;
