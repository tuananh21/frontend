import Header from "../Header";
import Footer from "../Footer";
import LogoImages from "../../exportImages/LogoImages";
import ViewOrderDetailSummary from "../Lists/ViewOrderDetailSummary";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOrderDetails } from "../../services/api";

const OrderDetail = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState([]);

    const getOrderDetails = async () => {
        const userId = localStorage.getItem("userId");
       
        const request = {
            orderId: orderId,
            userId: userId
        }
       
        try {
            const response = await fetchOrderDetails(request);
            setOrderDetails(response);
            console.log(response);
        } catch (error) {

        }
    }

    useEffect(() => {
        getOrderDetails();
    }, [orderId])

    return (
        <>
            <Header />
            <main className="main">
                {/* breadcrumb */}
                <div className="site-breadcrumb">
                    <div
                        className="site-breadcrumb-bg"
                        style={{ background: `url(${LogoImages.breadcrumbImage})` }}
                    />
                    <div className="container">
                        <div className="site-breadcrumb-wrap">
                            <h4 className="breadcrumb-title">Order Details</h4>
                            <ul className="breadcrumb-menu">
                                <li>
                                    <a href="index.html">
                                        <i className="far fa-home" /> Home
                                    </a>
                                </li>
                                <li className="active">Order Details</li>
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
                                                data-cfemail="14757a607b7a7d54716c75796478713a777b79"
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
                                            <a className="active" href="order-list.html">
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
                                            <div className="user-card user-order-detail">
                                                <div className="user-card-header">
                                                    <h4 className="user-card-title">
                                                        Order Details (#28VR5K59)
                                                    </h4>
                                                    <div className="user-card-header-right">
                                                        <Link to="/dashboard" className="theme-btn">
                                                            <span className="fas fa-arrow-left" />
                                                            Order List
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table table-borderless text-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Brand</th>
                                                                <th>Quantity</th>
                                                                <th>Size</th>
                                                                <th>Color</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="table-list-info">
                                                                        <a href="#">
                                                                            <div className="table-list-img">
                                                                                <img src="assets/img/product/01.png" alt="" />
                                                                            </div>
                                                                            <div className="table-list-content">
                                                                                <h6>Simple Denim Chair</h6>
                                                                                <span>Item ID: #123456</span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td>Moderno</td>
                                                                <td>20 Pcs</td>
                                                                <td>XXL</td>
                                                                <td>Black</td>
                                                                <td>$150</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="table-list-info">
                                                                        <a href="#">
                                                                            <div className="table-list-img">
                                                                                <img src="assets/img/product/02.png" alt="" />
                                                                            </div>
                                                                            <div className="table-list-content">
                                                                                <h6>Simple Denim Chair</h6>
                                                                                <span>Item ID: #123456</span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td>Moderno</td>
                                                                <td>20 Pcs</td>
                                                                <td>XXL</td>
                                                                <td>Black</td>
                                                                <td>$150</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="table-list-info">
                                                                        <a href="#">
                                                                            <div className="table-list-img">
                                                                                <img src="assets/img/product/03.png" alt="" />
                                                                            </div>
                                                                            <div className="table-list-content">
                                                                                <h6>Simple Denim Chair</h6>
                                                                                <span>Item ID: #123456</span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                                <td>Moderno</td>
                                                                <td>20 Pcs</td>
                                                                <td>XXL</td>
                                                                <td>Black</td>
                                                                <td>$150</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="order-detail-content">
                                                            <h5>Shipping Address</h5>
                                                            <p>
                                                                <i className="far fa-location-dot" /> 25/B Milford
                                                                Road, Richison Drive, New York, USA
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ViewOrderDetailSummary orderId={orderId} />
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

            <Footer />
        </>
    )
}

export default OrderDetail;