import { Link } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import "../assets/css/all-fontawesome.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/jquery-ui.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/style.css";

function About() {
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
                        <Link href="https://live.themewild.com/cdn-cgi/l/email-protection#b3daddd5dcf3d6cbd2dec3dfd69dd0dcde">
                          <i className="far fa-envelopes" />
                          <span
                            className="__cf_email__"
                            data-cfemail="157c7b737a55706d74786579703b767a78"
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
              <h4 className="breadcrumb-title">About Us</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link href="index.html">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* about area */}
        <div className="about-area py-120 mt-30 mb-30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="about-left wow fadeInLeft"
                  data-wow-delay=".25s"
                >
                  <div className="about-img">
                    <img
                      className="img-1"
                      src="assets/img/about/01.jpg"
                      alt=""
                    />
                    <img
                      className="img-2"
                      src="assets/img/about/02.jpg"
                      alt=""
                    />
                    <img
                      className="img-3"
                      src="assets/img/about/03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-experience">
                    <div className="about-experience-icon">
                      <img src="assets/img/icon/experience.svg" alt="" />
                    </div>
                    <b>
                      30 Years Of <br /> Experience
                    </b>
                  </div>
                  <div className="about-shape">
                    <img src="assets/img/shape/01.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="about-right wow fadeInRight"
                  data-wow-delay=".25s"
                >
                  <div className="site-heading mb-3">
                    <span className="site-title-tagline justify-content-start">
                      <i className="flaticon-drive" /> About Us
                    </span>
                    <h2 className="site-title">
                      We Provide Best And Quality <span>Furniture</span> Product
                      For You
                    </h2>
                  </div>
                  <p>
                    We are standard text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five but also the
                    leap into electronic remaining essentially by injected
                    humour unchanged.
                  </p>
                  <div className="about-list">
                    <ul>
                      <li>
                        <i className="fas fa-check-double" /> Streamlined
                        Shipping Experience
                      </li>
                      <li>
                        <i className="fas fa-check-double" /> Affordable Modern
                        Design
                      </li>
                      <li>
                        <i className="fas fa-check-double" /> Competitive Price
                        &amp; Easy To Shop
                      </li>
                      <li>
                        <i className="fas fa-check-double" /> We Made Awesome
                        Products
                      </li>
                    </ul>
                  </div>
                  <Link href="contact.html" className="theme-btn mt-4">
                    Discover More
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about area end */}
        {/* counter area */}
        <div className="counter-area pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src="assets/img/icon/sale.svg" alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-amount">
                      <span
                        className="counter"
                        data-count="+"
                        data-to={50}
                        data-speed={3000}
                      >
                        50
                      </span>
                      <span className="counter-sign">k</span>
                    </div>
                    <h6 className="title">Total Sales </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src="assets/img/icon/rate.svg" alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-amount">
                      <span
                        className="counter"
                        data-count="+"
                        data-to={90}
                        data-speed={3000}
                      >
                        90
                      </span>
                      <span className="counter-sign">k</span>
                    </div>
                    <h6 className="title">Happy Clients</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src="assets/img/icon/employee.svg" alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-amount">
                      <span
                        className="counter"
                        data-count="+"
                        data-to={150}
                        data-speed={3000}
                      >
                        150
                      </span>
                      <span className="counter-sign">+</span>
                    </div>
                    <h6 className="title">Team Workers</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src="assets/img/icon/award.svg" alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-amount">
                      <span
                        className="counter"
                        data-count="+"
                        data-to={30}
                        data-speed={3000}
                      >
                        30
                      </span>
                      <span className="counter-sign">+</span>
                    </div>
                    <h6 className="title">Win Awards</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter area end */}
        {/* testimonial area */}
        <div className="testimonial-area bg ts-bg py-90">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 mx-auto wow fadeInDown"
                data-wow-delay=".25s"
              >
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Testimonials</span>
                  <h2 className="site-title">
                    What Our Client <span>Say's</span>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="testimonial-slider owl-carousel owl-theme wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <div className="testimonial-author-img">
                    <img src="assets/img/testimonial/01.jpg" alt="" />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Sylvia H Green</h4>
                    <p>Customer</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                </div>
                <div className="testimonial-rate">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <div className="testimonial-author-img">
                    <img src="assets/img/testimonial/02.jpg" alt="" />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Gordo Novak</h4>
                    <p>Customer</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                </div>
                <div className="testimonial-rate">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <div className="testimonial-author-img">
                    <img src="assets/img/testimonial/03.jpg" alt="" />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Reid E Butt</h4>
                    <p>Customer</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                </div>
                <div className="testimonial-rate">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <div className="testimonial-author-img">
                    <img src="assets/img/testimonial/04.jpg" alt="" />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Parker Jimenez</h4>
                    <p>Customer</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                </div>
                <div className="testimonial-rate">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <div className="testimonial-author-img">
                    <img src="assets/img/testimonial/05.jpg" alt="" />
                  </div>
                  <div className="testimonial-author-info">
                    <h4>Heruli Nez</h4>
                    <p>Customer</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <p>
                    There are many variations of long passages available but the
                    content majority have suffered to the editor page when
                    looking at its layout alteration in some injected.
                  </p>
                </div>
                <div className="testimonial-rate">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testimonial-quote-icon">
                  <img src="assets/img/icon/quote.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial area end */}
        {/* video area */}
        <div className="video-area pt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Our Video</span>
                  <h2 className="site-title">
                    Let's check our latest <span>videos</span>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="video-content"
              style={{ backgroundImage: "url(assets/img/video/01.jpg)" }}
            >
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="video-wrapper">
                    <Link
                      className="play-btn popup-youtube"
                      href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                    >
                      <i className="fas fa-play" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* video area end */}
        {/* team-area */}
        <div className="team-area pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">Our Team</span>
                  <h2 className="site-title">
                    Meet Our Expert <span>Team</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="team-img">
                    <img src="assets/img/team/01.jpg" alt="thumb" />
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <Link href="#">Chad Smith</Link>
                      </h5>
                      <span>Senior Manager</span>
                    </div>
                  </div>
                  <div className="team-social">
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
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                  <div className="team-img">
                    <img src="assets/img/team/02.jpg" alt="thumb" />
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <Link href="#">Malissa Fie</Link>
                      </h5>
                      <span>SEO Expert</span>
                    </div>
                  </div>
                  <div className="team-social">
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
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                  <div className="team-img">
                    <img src="assets/img/team/03.jpg" alt="thumb" />
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <Link href="#">Arron Rodri</Link>
                      </h5>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="team-social">
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
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay="1s">
                  <div className="team-img">
                    <img src="assets/img/team/04.jpg" alt="thumb" />
                  </div>
                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <Link href="#">Tony Pinako</Link>
                      </h5>
                      <span>Digital Marketer</span>
                    </div>
                  </div>
                  <div className="team-social">
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
        {/* team-area end */}
        {/* feature area */}
        <div className="feature-area2 pb-100">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="feature-wrap">
              <div className="row g-0">
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fal fa-truck" />
                    </div>
                    <div className="feature-content">
                      <h4>Free Delivery</h4>
                      <p>Orders Over $120</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fal fa-sync" />
                    </div>
                    <div className="feature-content">
                      <h4>Get Refund</h4>
                      <p>Within 30 Days Returns</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fal fa-wallet" />
                    </div>
                    <div className="feature-content">
                      <h4>Safe Payment</h4>
                      <p>100% Secure Payment</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fal fa-headset" />
                    </div>
                    <div className="feature-content">
                      <h4>24/7 Support</h4>
                      <p>Feel Free To Call Us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* feature area end */}
        {/* instagram-area */}
        <div className="instagram-area pb-100">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <h2 className="site-title">
                    Instagram <span>@Fameo</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="instagram-slider owl-carousel owl-theme">
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/01.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/02.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/03.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/04.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/05.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/06.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
              <div className="instagram-item">
                <div className="instagram-img">
                  <img src="assets/img/instagram/07.jpg" alt="Thumb" />
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* instagram-area end */}
        {/* brand area */}
        <div className="brand-area bg pt-50 pb-50">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h2 className="site-title">
                    Trusted by over <span>3.2k+</span> companies
                  </h2>
                </div>
              </div>
            </div>
            <div className="brand-slider owl-carousel owl-theme">
              <div className="brand-item">
                <img src="assets/img/brand/01.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/02.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/03.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/04.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/05.png" alt="" />
              </div>
              <div className="brand-item">
                <img src="assets/img/brand/06.png" alt="" />
              </div>
            </div>
            <div className="text-center">
              <Link href="#" className="theme-btn">
                View All Brands <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
        {/* brand area end */}
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
                      <Link href="https://live.themewild.com/cdn-cgi/l/email-protection#6e070008012e0b160f031e020b400d0103">
                        <i className="far fa-envelope" />
                        <span
                          className="__cf_email__"
                          data-cfemail="147d7a727b54716c75796478713a777b79"
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

export default About;
