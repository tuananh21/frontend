import { Link } from "react-router-dom";
import { useState } from "react";
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

import breadcrumb1 from "../assets/img/breadcrumb/01.jpg";
import product1 from "../assets/img/product/01.png";
import product3 from "../assets/img/product/03.png";
import product15 from "../assets/img/product/15.png";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Simple Denim Chair",
      price: 1500,
      type: "Armchair",
      color: "Orange",
      image: product1,
    },
    {
      id: 2,
      name: "Simple Denim Chair",
      price: 1500,
      type: "Armchair",
      color: "Orange",
      image: product15,
    },
    {
      id: 3,
      name: "Simple Denim Chair",
      price: 1500,
      type: "Armchair",
      color: "Orange",
      image: product3,
    },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* header area */}
      <Header />
      {/* header area end */}
      <main className="main">
        {/* breadcrumb */}
        <div className="site-breadcrumb">
          <div
            className="site-breadcrumb-bg"
            style={{ background: `url(${breadcrumb1})` }}
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
                          {cartItems.map((item) => (
                            <tr>
                              <td>
                                <div className="shop-cart-img">
                                  <Link href="#">
                                    <img src={item.image} alt="" />
                                  </Link>
                                </div>
                              </td>
                              <td>
                                <div className="shop-cart-content">
                                  <h5 className="shop-cart-name">
                                    <Link href="#">{item.name}</Link>
                                  </h5>
                                  <div className="shop-cart-info">
                                    <p>
                                      <span>Type:</span>
                                      {item.type}
                                    </p>
                                    <p>
                                      <span>Color:</span>
                                      {item.color}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="shop-cart-price">
                                  <span>{item.price}</span>
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
                                  <span>{item.price}</span>
                                </div>
                              </td>
                              <td>
                                <button
                                  className="shop-cart-remove"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <i className="far fa-times" />
                                </button>
                              </td>
                            </tr>
                          ))}
                          {cartItems.length === 0 && (
                            <tr>
                              <td colSpan="6" className="text-center">
                                No items in the cart.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="shop-cart-footer">
                    <div className="row">
                      <div className="col-md-7 col-lg-6"></div>
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
                      <strong>Sub Total:</strong>{" "}
                      <span>
                        $
                        {cartItems.reduce(
                          (total, item) => total + item.price,
                          0
                        )}
                      </span>
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
                        <strong>Total:</strong>{" "}
                        <span>
                          $
                          {cartItems.reduce(
                            (total, item) => total + item.price,
                            0
                          ) +
                            25 -
                            5}
                        </span>
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
      <Footer />
      {/* footer area end */}
      {/* js */}
    </>
  );
}

export default Cart;
