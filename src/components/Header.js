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
import { checkLoginStatus } from "../utils/AuthUtils";
import ViewDropDownCart from "./Lists/ViewDropDownCart";
import LogoImages from "../exportImages/LogoImages";




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
            <Link className="navbar-brand" to="/">
              <img src={LogoImages.logo} alt="logo" />
            </Link>
            <div className="mobile-menu-right">
              <div className="mobile-menu-btn">
                <Link href="wishlist.html" className="nav-right-link">
                  <i className="far fa-heart" />
                  <span>2</span>
                </Link>
                <Link to="/cart" className="nav-right-link">
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
                      to="/"
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
                          to="/profile"
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
                                  <img src={""} alt="" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown" style={{ display: checkLoginStatus() ? 'block' : 'none' }}>
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
                  <ul className="nav-right-list" style={{ display: checkLoginStatus() ? 'block' : 'none' }}>
                    <li>
                      <Link href="wishlist.html" className="list-link">
                        <i className="far fa-heart" />
                        <span>2</span>
                      </Link>
                    </li>

                    {/* View dropdown cart */}
                    <ViewDropDownCart />

                  </ul>
                  <div className="nav-right-btn" style={{ display: checkLoginStatus() ? 'none' : 'block' }}>
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
