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

import logo from "../assets/img/logo/logo.png";

import breadcrumb1 from "../assets/img/breadcrumb/01.jpg";

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

function ShopList() {
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
            style={{ backgroundImage: `url(${breadcrumb1})` }}
          />
          <div className="container">
            <div className="site-breadcrumb-wrap">
              <h4 className="breadcrumb-title">Shop List One</h4>
              <ul className="breadcrumb-menu">
                <li>
                  <Link to="/">
                    <i className="far fa-home" /> Home
                  </Link>
                </li>
                <li className="active">Shop List One</li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end */}
        {/* shop-area */}
        <div className="shop-area bg py-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="shop-sidebar">
                  <div className="shop-widget">
                    <div className="shop-search-form">
                      <h4 className="shop-widget-title">Search</h4>
                      <form action="#">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <button type="search">
                            <i className="far fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="shop-widget">
                    <h4 className="shop-widget-title">Category</h4>
                    <ul className="shop-category-list">
                      <li>
                        <Link href="#">
                          Bedroom<span>(15)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Living Room<span>(23)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Bathroom<span>(35)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Decoration<span>(46)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Office<span>(39)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Kitchen<span>(79)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Storage<span>(28)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Lighting<span>(17)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Sofa<span>(12)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Chair<span>(74)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Armchair<span>(38)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Table<span>(22)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Others<span>(25)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-widget">
                    <h4 className="shop-widget-title">Brands</h4>
                    <ul className="shop-checkbox-list">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand1"
                          />
                          <label className="form-check-label" htmlFor="brand1">
                            Tovol<span>(12)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand2"
                          />
                          <label className="form-check-label" htmlFor="brand2">
                            Sundoy<span>(15)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand3"
                          />
                          <label className="form-check-label" htmlFor="brand3">
                            Sahoo Home<span>(20)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand4"
                          />
                          <label className="form-check-label" htmlFor="brand4">
                            Casterly<span>(05)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand5"
                          />
                          <label className="form-check-label" htmlFor="brand5">
                            Mainden Home<span>(09)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand6"
                          />
                          <label className="form-check-label" htmlFor="brand6">
                            Knroll Furniture<span>(25)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand7"
                          />
                          <label className="form-check-label" htmlFor="brand7">
                            Modern Enternity<span>(19)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand8"
                          />
                          <label className="form-check-label" htmlFor="brand8">
                            Charisha<span>(23)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand9"
                          />
                          <label className="form-check-label" htmlFor="brand9">
                            Audou<span>(13)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand10"
                          />
                          <label className="form-check-label" htmlFor="brand10">
                            Desioreck<span>(14)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand11"
                          />
                          <label className="form-check-label" htmlFor="brand11">
                            Rochel Brek<span>(16)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand12"
                          />
                          <label className="form-check-label" htmlFor="brand12">
                            Mordani<span>(17)</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="brand13"
                          />
                          <label className="form-check-label" htmlFor="brand13">
                            Others<span>(18)</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-widget">
                    <h4 className="shop-widget-title">Price Range</h4>
                    <div className="price-range-box">
                      <div className="price-range-input">
                        <input type="text" id="price-amount" readOnly="" />
                      </div>
                      <div className="price-range" />
                    </div>
                  </div>
                  <div className="shop-widget">
                    <h4 className="shop-widget-title">Sales</h4>
                    <ul className="shop-checkbox-list">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sale1"
                          />
                          <label className="form-check-label" htmlFor="sale1">
                            On Sale
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sale2"
                          />
                          <label className="form-check-label" htmlFor="sale2">
                            In Stock
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sale3"
                          />
                          <label className="form-check-label" htmlFor="sale3">
                            Out Of Stock
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sale4"
                          />
                          <label className="form-check-label" htmlFor="sale4">
                            Discount
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-widget">
                    <h4 className="shop-widget-title">Ratings</h4>
                    <ul className="shop-checkbox-list rating">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rate1"
                          />
                          <label className="form-check-label" htmlFor="rate1">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rate2"
                          />
                          <label className="form-check-label" htmlFor="rate2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fal fa-star" />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rate3"
                          />
                          <label className="form-check-label" htmlFor="rate3">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fal fa-star" />
                            <i className="fal fa-star" />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rate4"
                          />
                          <label className="form-check-label" htmlFor="rate4">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fal fa-star" />
                            <i className="fal fa-star" />
                            <i className="fal fa-star" />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rate5"
                          />
                          <label className="form-check-label" htmlFor="rate5">
                            <i className="fas fa-star" />
                            <i className="fal fa-star" />
                            <i className="fal fa-star" />
                            <i className="fal fa-star" />
                            <i className="fal fa-star" />
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-widget">
                    <h4 className="shop-widget-title">Colors</h4>
                    <ul className="shop-checkbox-list color">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="color1"
                          />
                          <label className="form-check-label" htmlFor="color1">
                            <span style={{ backgroundColor: "#606ddd" }} />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="color2"
                          />
                          <label className="form-check-label" htmlFor="color2">
                            <span style={{ backgroundColor: "#4caf50" }} />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="color3"
                          />
                          <label className="form-check-label" htmlFor="color3">
                            <span style={{ backgroundColor: "#17a2b8" }} />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="color4"
                          />
                          <label className="form-check-label" htmlFor="color4">
                            <span style={{ backgroundColor: "#ffc107" }} />
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="color5"
                          />
                          <label className="form-check-label" htmlFor="color5">
                            <span style={{ backgroundColor: "#f44336" }} />
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-widget">
                    <h4 className="shop-widget-title">Sizes</h4>
                    <ul className="shop-checkbox-list">
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="size1"
                          />
                          <label className="form-check-label" htmlFor="size1">
                            Extra Small
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="size2"
                          />
                          <label className="form-check-label" htmlFor="size2">
                            Small
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="size3"
                          />
                          <label className="form-check-label" htmlFor="size3">
                            Medium
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="size4"
                          />
                          <label className="form-check-label" htmlFor="size4">
                            Large
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="size5"
                          />
                          <label className="form-check-label" htmlFor="size5">
                            Extra Large
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="shop-widget-banner mt-30 mb-50">
                    <div
                      className="banner-img"
                      style={{
                        backgroundImage:
                          "url(assets/img/banner/shop-banner.jpg)",
                      }}
                    />
                    <div className="banner-content">
                      <h6>
                        Get <span>35% Off</span>
                      </h6>
                      <h4>New Collection of Furnitures</h4>
                      <Link href="#" className="theme-btn">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="col-md-12">
                  <div className="shop-sort">
                    <div className="shop-sort-box">
                      <div className="shop-sorty-label">Sort By:</div>
                      <select className="select">
                        <option value={1}>Default Sorting</option>
                        <option value={5}>Latest Items</option>
                        <option value={2}>Best Seller Items</option>
                        <option value={3}>Price - Low To High</option>
                        <option value={4}>Price - High To Low</option>
                      </select>
                      <div className="shop-sort-show">
                        Showing 1-10 of 50 Results
                      </div>
                    </div>
                    <div className="shop-sort-gl">
                      <Link href="shop-grid.html" className="shop-sort-grid">
                        <i className="far fa-grid-round-2" />
                      </Link>
                      <Link
                        href="shop-list.html"
                        className="shop-sort-list active"
                      >
                        <i className="far fa-list-ul" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="shop-item-wrap item-list">
                  <div className="row g-4">
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <span className="type">Trending</span>
                          <Link href="shop-single.html">
                            <img src={product1} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <span className="type hot">Hot</span>
                          <Link href="shop-single.html">
                            <img src={product2} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <span className="type oos">Out Of Stock</span>
                          <Link href="shop-single.html">
                            <img src={product3} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product4} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <span className="type discount">10% Off</span>
                          <Link href="shop-single.html">
                            <img src={product5} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <del>120.00</del>
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product6} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <span className="type new">New</span>
                          <Link href="shop-single.html">
                            <img src={product7} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product8} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product9} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product10} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product11} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <span className="type hot">Hot</span>
                          <Link href="shop-single.html">
                            <img src={product12} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product13} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product14} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="product-item">
                        <div className="product-img">
                          <Link href="shop-single.html">
                            <img src={product15} alt="" />
                          </Link>
                          <div className="product-action-wrap">
                            <div className="product-action">
                              <Link
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#quickview"
                                data-tooltip="tooltip"
                                title="Quick View"
                              >
                                <i className="far fa-eye" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Wishlist"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                href="#"
                                data-tooltip="tooltip"
                                title="Add To Compare"
                              >
                                <i className="far fa-arrows-repeat" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-title">
                            <Link href="shop-single.html">Simple Denim Chair</Link>
                          </h3>
                          <div className="product-rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book remaining
                            essentially unchanged.
                          </p>
                          <div className="product-bottom">
                            <div className="product-price">
                              <span>$100.00</span>
                            </div>
                            <button
                              type="button"
                              className="product-cart-btn"
                              data-bs-placement="left"
                              data-tooltip="tooltip"
                              title="Add To Cart"
                            >
                              <i className="far fa-shopping-bag" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* pagination */}
                <div className="pagination-area mt-50">
                  <div aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">
                            <i className="far fa-arrow-left" />
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
                        <span className="page-link">...</span>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          10
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="far fa-arrow-right" />
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
        {/* shop-area end */}
      </main>
      {/* footer area */}
      <Footer />
      {/* footer area end */}
      {/* scroll-top */}
      <Link href="#" id="scroll-top">
        <i className="far fa-arrow-up-from-arc" />
      </Link>
      {/* scroll-top end */}
      {/* modal quick shop*/}
      <div
        className="modal quickview fade"
        id="quickview"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="quickview"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="far fa-xmark" />
            </button>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <img src={product4} alt="#" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="quickview-content">
                    <h4 className="quickview-title">Simple Denim Chair</h4>
                    <div className="quickview-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                      <span className="rating-count">
                        {" "}
                        (4 Customer Reviews)
                      </span>
                    </div>
                    <div className="quickview-price">
                      <h5>
                        <del>$860</del>
                        <span>$740</span>
                      </h5>
                    </div>
                    <ul className="quickview-list">
                      <li>
                        Brand:<span>Ricordi</span>
                      </li>
                      <li>
                        Category:<span>Living Room</span>
                      </li>
                      <li>
                        Stock:<span className="stock">Available</span>
                      </li>
                      <li>
                        Code:<span>789FGSA</span>
                      </li>
                    </ul>
                    <div className="quickview-cart">
                      <Link href="#" className="theme-btn">
                        Add to cart
                      </Link>
                    </div>
                    <div className="quickview-social">
                      <span>Share:</span>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-x-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal quick shop end */}
      {/* js */}
    </>
  );
}

export default ShopList;