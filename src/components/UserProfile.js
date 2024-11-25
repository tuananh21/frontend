import { Link } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import "../assets/css/all-fontawesome.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/jquery-ui.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/nice-select.min.css";
import "../assets/css/style.css";
import Header from "./Header";
import Footer from "./Footer";

function UserProfile() {
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
              <h4 className="breadcrumb-title">My Profile</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <a href="index.html">
                    <i className="far fa-home" /> Home
                  </a>
                </li>
                <li className="active">My Profile</li>
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
                        data-cfemail="8aebe4fee5e4e3caeff2ebe7fae6efa4e9e5e7"
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
                      <a className="active" href="user-profile.html">
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
                      <a href="wishlist.html">
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
                        <h4 className="user-card-title">Profile Info</h4>
                        <div className="user-form">
                          <form action="#">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Antoni"
                                    placeholder="First Name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Jonson"
                                    placeholder="Last Name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Email</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="antoni@example.com"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Phone</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="+2 134 562 458"
                                    placeholder="Phone"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Address</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="New York, USA"
                                    placeholder="Address"
                                  />
                                </div>
                              </div>
                            </div>
                            <button type="submit" className="theme-btn">
                              <span className="far fa-user" /> Save Changes
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="user-card">
                        <h4 className="user-card-title">Change Password</h4>
                        <div className="col-lg-12">
                          <div className="user-form">
                            <form action="#">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label>Old Password</label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Old Password"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label>New Password</label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="New Password"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label>Re-Type Password</label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Re-Type Password"
                                    />
                                  </div>
                                </div>
                              </div>
                              <button type="submit" className="theme-btn">
                                <span className="far fa-key" /> Change Password
                              </button>
                            </form>
                          </div>
                        </div>
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
      {/* js */}
    </>
  );
}

export default UserProfile;
