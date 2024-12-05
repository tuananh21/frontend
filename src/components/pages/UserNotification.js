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
function UserNotification() {
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
              <h4 className="breadcrumb-title">Notification</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link href="index.html">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Notification</li>
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
                        data-cfemail="3f5e514b5051567f5a475e524f535a115c5052"
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
                      <Link className="active" href="user-notification.html">
                        <i className="far fa-bell" /> Notification{" "}
                        <span className="badge badge-danger">02</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="user-message.html">
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
                      <Link href="#">
                        <i className="far fa-sign-out" /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="user-wrapper">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="user-card">
                        <h4 className="user-card-title">Notification</h4>
                        <div className="table-responsive">
                          <table className="table table-borderless text-nowrap">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Notification</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="table-list-code">01.</span>
                                </td>
                                <td>
                                  <p>
                                    There are many variations of passages
                                    available
                                  </p>
                                </td>
                                <td>Aug 12, 2024</td>
                                <td>
                                  <span className="badge badge-info">
                                    Unread
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    href="#"
                                    className="btn btn-outline-secondary btn-sm rounded-2"
                                  >
                                    <i className="far fa-eye me-1" /> Mark As
                                    Read
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-list-code">02.</span>
                                </td>
                                <td>
                                  <p>
                                    There are many variations of passages
                                    available
                                  </p>
                                </td>
                                <td>Aug 12, 2024</td>
                                <td>
                                  <span className="badge badge-info">
                                    Unread
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    href="#"
                                    className="btn btn-outline-secondary btn-sm rounded-2"
                                  >
                                    <i className="far fa-eye me-1" /> Mark As
                                    Read
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-list-code">03.</span>
                                </td>
                                <td>
                                  <p>
                                    There are many variations of passages
                                    available
                                  </p>
                                </td>
                                <td>Aug 12, 2024</td>
                                <td>
                                  <span className="badge badge-success">
                                    Read
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    href="#"
                                    className="btn btn-outline-secondary btn-sm rounded-2"
                                  >
                                    <i className="far fa-eye-slash me-1" /> Mark
                                    As Unread
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-list-code">04.</span>
                                </td>
                                <td>
                                  <p>
                                    There are many variations of passages
                                    available
                                  </p>
                                </td>
                                <td>Aug 12, 2024</td>
                                <td>
                                  <span className="badge badge-info">
                                    Unread
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    href="#"
                                    className="btn btn-outline-secondary btn-sm rounded-2"
                                  >
                                    <i className="far fa-eye me-1" /> Mark As
                                    Read
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-list-code">05.</span>
                                </td>
                                <td>
                                  <p>
                                    There are many variations of passages
                                    available
                                  </p>
                                </td>
                                <td>Aug 12, 2024</td>
                                <td>
                                  <span className="badge badge-success">
                                    Read
                                  </span>
                                </td>
                                <td>
                                  <Link
                                    href="#"
                                    className="btn btn-outline-secondary btn-sm rounded-2"
                                  >
                                    <i className="far fa-eye-slash me-1" /> Mark
                                    As Unread
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* pagination */}
                          <div className="pagination-area mt-4 mb-3">
                            <div aria-label="Page navigation example">
                              <ul className="pagination">
                                <li className="page-item">
                                  <Link
                                    className="page-link"
                                    href="#"
                                    aria-label="Previous"
                                  >
                                    <span aria-hidden="true">
                                      <i className="far fa-angle-double-left" />
                                    </span>
                                  </Link>
                                </li>
                                <li className="page-item active">
                                  <Link className="page-link" href="#">
                                    1
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" href="#">
                                    2
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" href="#">
                                    3
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link
                                    className="page-link"
                                    href="#"
                                    aria-label="Next"
                                  >
                                    <span aria-hidden="true">
                                      <i className="far fa-angle-double-right" />
                                    </span>
                                  </Link>
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

export default UserNotification;
