import { Link, useNavigate } from "react-router-dom";
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
import { logout } from "../../services/api";
import LogoImages from "../../exportImages/LogoImages";

function UserMessage() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout(navigate);
};
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
            style={{ background:  `url(${LogoImages.breadcrumbImage})` }}
          />
          <div className="container">
            <div className="site-breadcrumb-wrap">
              <h4 className="breadcrumb-title">Messages</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link href="index.html">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Messages</li>
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
                      <Link
                        href="https://live.themewild.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="2c4d42584342456c49544d415c4049024f4341"
                      >
                        [email&nbsp;protected]
                      </Link>
                    </p>
                  </div>
                  <ul className="sidebar-list">
                    <li>
                      <Link href="user-dashboard.html">
                        <i className="far fa-gauge-high" /> Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="user-profile.html">
                        <i className="far fa-user" /> My Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="order-list.html">
                        <i className="far fa-shopping-bag" /> My Order List{" "}
                        <span className="badge badge-danger">02</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="wishlist.html">
                        <i className="far fa-heart" /> My Wishlist{" "}
                        <span className="badge badge-danger">02</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="address-list.html">
                        <i className="far fa-location-dot" /> Address List
                      </Link>
                    </li>
                    <li>
                      <Link href="support-ticket.html">
                        <i className="far fa-headset" /> Support Tickets{" "}
                        <span className="badge badge-danger">02</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="track-order.html">
                        <i className="far fa-map-location-dot" /> Track My Order
                      </Link>
                    </li>
                    <li>
                      <Link href="payment-method.html">
                        <i className="far fa-wallet" /> Payment Methods
                      </Link>
                    </li>
                    <li>
                      <Link href="user-notification.html">
                        <i className="far fa-bell" /> Notification{" "}
                        <span className="badge badge-danger">02</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="active" href="user-message.html">
                        <i className="far fa-envelope" /> Messages{" "}
                        <span className="badge badge-danger">02</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="user-setting.html">
                        <i className="far fa-gear" /> Settings
                      </Link>
                    </li>
                    <li>
                      <Link href="#"  onClick={handleLogout}>
                        <i className="far fa-sign-out" /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="user-wrapper">
                  <div className="user-card user-message">
                    <div className="user-card-header">
                      <h4 className="user-card-title">Messages</h4>
                      <div className="user-card-header-right">
                        <div className="header-account">
                          <div className="dropdown">
                            <div
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src="assets/img/account/01.jpg" alt="" />
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="far fa-ban" /> Block Chat
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="far fa-message-slash" /> Mute
                                  Chat
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" href="#">
                                  <i className="far fa-trash-can" /> Delete Chat
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="message-wrapper">
                          <div className="message-inbox">
                            <ul className="message-list">
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/01.jpg"
                                      alt=""
                                    />
                                    <span className="message-status online" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Angela Howe</h5>
                                      <span>just now</span>
                                    </div>
                                    <p>
                                      Hello, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/02.jpg"
                                      alt=""
                                    />
                                    <span className="message-status offline" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Roger Knight</h5>
                                      <span>15 min ago</span>
                                    </div>
                                    <p>
                                      Hi, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li className="message-active">
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/03.jpg"
                                      alt=""
                                    />
                                    <span className="message-status busy" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Rikki Hamby</h5>
                                      <span>5 hours ago</span>
                                    </div>
                                    <p>
                                      Hello, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/04.jpg"
                                      alt=""
                                    />
                                    <span className="message-status online" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Arlene Lawrence</h5>
                                      <span>Yesterday</span>
                                    </div>
                                    <p>
                                      Hi, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/05.jpg"
                                      alt=""
                                    />
                                    <span className="message-status busy" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Donald Ledoux</h5>
                                      <span>2 week ago</span>
                                    </div>
                                    <p>
                                      Hello, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/01.jpg"
                                      alt=""
                                    />
                                    <span className="message-status online" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Hope Stanley</h5>
                                      <span>1 months ago</span>
                                    </div>
                                    <p>
                                      Hi, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/02.jpg"
                                      alt=""
                                    />
                                    <span className="message-status offline" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Rob Madden</h5>
                                      <span>Sep 11, 2024</span>
                                    </div>
                                    <p>
                                      Hello, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/03.jpg"
                                      alt=""
                                    />
                                    <span className="message-status online" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Dawne Martin</h5>
                                      <span>Sep 15, 2024</span>
                                    </div>
                                    <p>
                                      Hi, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/04.jpg"
                                      alt=""
                                    />
                                    <span className="message-status busy" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Nicholas Diedrich</h5>
                                      <span>Sep 20, 2024</span>
                                    </div>
                                    <p>
                                      Hello, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/05.jpg"
                                      alt=""
                                    />
                                    <span className="message-status busy" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Denise Garrett</h5>
                                      <span>Sep 25, 2024</span>
                                    </div>
                                    <p>
                                      Hi, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/01.jpg"
                                      alt=""
                                    />
                                    <span className="message-status offline" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Justin Garza</h5>
                                      <span>Sep 26, 2024</span>
                                    </div>
                                    <p>
                                      Hello, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                              <li>
                                <Link href="#">
                                  <div className="message-avatar">
                                    <img
                                      src="assets/img/account/02.jpg"
                                      alt=""
                                    />
                                    <span className="message-status online" />
                                  </div>
                                  <div className="message-by">
                                    <div className="message-by-content">
                                      <h5>Jenna Lemon</h5>
                                      <span>Sep 28, 2024</span>
                                    </div>
                                    <p>
                                      Hi, It is a long establish fact that a
                                      reader will distracted
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="message-content">
                            <div className="message-content-info">
                              <div className="message-item">
                                <div className="message-avatar">
                                  <img src="assets/img/account/01.jpg" alt="" />
                                </div>
                                <div className="message-description">
                                  <p>
                                    Hello, It is a long established fact that a
                                    reader will be distracted by the readable
                                    content of a page when looking at its
                                    layout.
                                  </p>
                                </div>
                              </div>
                              <div className="message-item me">
                                <div className="message-avatar">
                                  <img src="assets/img/account/02.jpg" alt="" />
                                </div>
                                <div className="message-description">
                                  <p>
                                    There are many variations of passages
                                    available but the majority have suffered
                                    alteration in some form by injected humour.
                                  </p>
                                </div>
                              </div>
                              <div className="message-item">
                                <div className="message-avatar">
                                  <img src="assets/img/account/01.jpg" alt="" />
                                </div>
                                <div className="message-description">
                                  <p>
                                    We denounce with righteous indignation and
                                    dislike men who are so beguiled and
                                    demoralized by the charms of pleasure of the
                                    moment.
                                  </p>
                                </div>
                              </div>
                              <div className="message-item me">
                                <div className="message-avatar">
                                  <img src="assets/img/account/02.jpg" alt="" />
                                </div>
                                <div className="message-description">
                                  <p>
                                    So blinded by desire that they cannot
                                    foresee the pain and trouble that are bound
                                    to ensue.
                                  </p>
                                </div>
                              </div>
                              <div className="message-item">
                                <div className="message-avatar">
                                  <img src="assets/img/account/01.jpg" alt="" />
                                </div>
                                <div className="message-description">
                                  <p>
                                    In a free hour when our power of choice is
                                    untra and when nothing prevents our being
                                    able.
                                  </p>
                                </div>
                              </div>
                              <div className="message-item me">
                                <div className="message-avatar">
                                  <img src="assets/img/account/02.jpg" alt="" />
                                </div>
                                <div className="message-description">
                                  <p>
                                    We like best every pleasure is to be
                                    welcomed and every pain avoided in certain
                                    circums and owing to the claims of duty.
                                  </p>
                                </div>
                              </div>
                              <div className="message-item">
                                <div className="message-avatar">
                                  <img src="assets/img/account/01.jpg" alt="" />
                                </div>
                                <div className="message-description">
                                  <p>
                                    The obligations of business it will
                                    frequently occur that pleasures have to be
                                    repudiated and annoyances accepted.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="message-reply">
                              <form action="#">
                                <div className="form-group">
                                  <textarea
                                    cols={40}
                                    rows={3}
                                    className="form-control"
                                    placeholder="Your Message"
                                    defaultValue={""}
                                  />
                                </div>
                                <button type="submit" className="theme-btn">
                                  <span className="far fa-paper-plane" /> Send
                                  Message
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
        </div>
        {/* user dashboard end */}
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

export default UserMessage;
