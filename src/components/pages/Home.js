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

import logo from "../../assets/img/logo/logo.png";

import megabanner from "../../assets/img/banner/mega-menu-banner.jpg";
import bigbanner from "../../assets/img/banner/big-banner.jpg"

import slider1 from "../../assets/img/hero/slider-1.jpg";

import product1 from "../../assets/img/product/01.png";
import product2 from "../../assets/img/product/02.png";
import product3 from "../../assets/img/product/03.png";
import product4 from "../../assets/img/product/04.png";
import product5 from "../../assets/img/product/05.png";
import product6 from "../../assets/img/product/06.png";
import product7 from "../../assets/img/product/07.png";
import product8 from "../../assets/img/product/08.png";
import product9 from "../../assets/img/product/09.png";
import product10 from "../../assets/img/product/10.png";
import product11 from "../../assets/img/product/11.png";
import product12 from "../../assets/img/product/12.png";
import product13 from "../../assets/img/product/13.png";
import product14 from "../../assets/img/product/14.png";
import product15 from "../../assets/img/product/15.png";
import product16 from "../../assets/img/product/16.png";
import product24 from "../../assets/img/product/24.png";

import category1 from "../../assets/img/category/01.png";
import category2 from "../../assets/img/category/02.png";
import category3 from "../../assets/img/category/03.png";
import category4 from "../../assets/img/category/04.png";
import category5 from "../../assets/img/category/05.png";
import category6 from "../../assets/img/category/06.png";
import category7 from "../../assets/img/category/07.png";
import category8 from "../../assets/img/category/08.png";
import category9 from "../../assets/img/category/09.png";
import ViewPopularItems from "../Lists/ViewPopularItems";



function Home() {
  
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
        {/* hero slider */}
        <div className="hero-section hs-3">
          <div className="container-fluid px-0">
            <div className="hero-slider owl-carousel owl-theme">
              <div className="hero-single">
                <div
                  className="hero-single-bg"
                  style={{
                    backgroundImage: `url(${slider1})`,
                  }}
                />
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-8 col-xl-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          Welcome to fameo!
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Discover modern <span>furniture</span> for your every
                          room
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          There are many variations of passages orem psum
                          available but the majority have suffered are going to
                          use a passage alteration in some form by injected
                          humour.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <Link href="shop-grid.html" className="theme-btn">
                            Shop Now
                            <i className="fas fa-arrow-right" />
                          </Link>
                          <Link
                            to="/about"
                            className="theme-btn theme-btn2"
                          >
                            Learn More
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-single">
                <div
                  className="hero-single-bg"
                  style={{
                    backgroundImage: "url(assets/img/hero/slider-2.jpg)",
                  }}
                />
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-8 col-xl-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          Welcome to fameo!
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Discover modern <span>furniture</span> for your every
                          room
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          There are many variations of passages orem psum
                          available but the majority have suffered are going to
                          use a passage alteration in some form by injected
                          humour.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <Link href="shop-grid.html" className="theme-btn">
                            Shop Now
                            <i className="fas fa-arrow-right" />
                          </Link>
                          <Link
                            to="/about"
                            className="theme-btn theme-btn2"
                          >
                            Learn More
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-single">
                <div
                  className="hero-single-bg"
                  style={{
                    backgroundImage: "url(assets/img/hero/slider-3.jpg)",
                  }}
                />
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-8 col-xl-6">
                      <div className="hero-content">
                        <h6
                          className="hero-sub-title"
                          data-animation="fadeInUp"
                          data-delay=".25s"
                        >
                          Welcome to fameo!
                        </h6>
                        <h1
                          className="hero-title"
                          data-animation="fadeInRight"
                          data-delay=".50s"
                        >
                          Discover modern <span>furniture</span> for your every
                          room
                        </h1>
                        <p data-animation="fadeInLeft" data-delay=".75s">
                          There are many variations of passages orem psum
                          available but the majority have suffered are going to
                          use a passage alteration in some form by injected
                          humour.
                        </p>
                        <div
                          className="hero-btn"
                          data-animation="fadeInUp"
                          data-delay="1s"
                        >
                          <Link href="shop-grid.html" className="theme-btn">
                            Shop Now
                            <i className="fas fa-arrow-right" />
                          </Link>
                          <Link
                            to="/about"
                            className="theme-btn theme-btn2"
                          >
                            Learn More
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero slider end */}
        {/* category area */}
        <div className="category-area3 pt-50">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="category-slider owl-carousel owl-theme">
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category1} alt="" />
                    </div>
                    <div className="content">
                      <h4>Bedroom</h4>
                      <p>30 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category2} alt="" />
                    </div>
                    <div className="content">
                      <h4>Living Room</h4>
                      <p>25 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category3} alt="" />
                    </div>
                    <div className="content">
                      <h4>Bathroom</h4>
                      <p>15 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category4} alt="" />
                    </div>
                    <div className="content">
                      <h4>Decoration</h4>
                      <p>05 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category5} alt="" />
                    </div>
                    <div className="content">
                      <h4>Office</h4>
                      <p>30 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category6} alt="" />
                    </div>
                    <div className="content">
                      <h4>Kitchen</h4>
                      <p>12 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category7} alt="" />
                    </div>
                    <div className="content">
                      <h4>Storage</h4>
                      <p>08 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category8} alt="" />
                    </div>
                    <div className="content">
                      <h4>Lighting</h4>
                      <p>14 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="category-item">
                <Link href="#">
                  <div className="category-info">
                    <div className="icon">
                      <img src={category9} alt="" />
                    </div>
                    <div className="content">
                      <h4>Sofa</h4>
                      <p>19 Items</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* category area end*/}
        {/* feature area */}
        <div className="feature-area2 pt-70 pb-90">
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
        {/* trending item */}
        {/* <div className="product-area pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12 wow fadeInDown" data-wow-delay=".25s">
                <div className="site-heading-inline">
                  <h2 className="site-title">Trending Items</h2>
                  <Link href="#">
                    View More <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="product-wrap item-2 wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div className="product-slider owl-carousel owl-theme">
                <div className="product-item">
                  <div className="product-img">
                    <span className="type new">New</span>
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
                    <div className="product-bottom">
                      <div className="product-price">
                        <span>$250.00</span>
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
                    <div className="product-bottom">
                      <div className="product-price">
                        <span>$250.00</span>
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
                    <div className="product-bottom">
                      <div className="product-price">
                        <span>$250.00</span>
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
                <div className="product-item">
                  <div className="product-img">
                    <span className="type discount">10% Off</span>
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
                    <div className="product-bottom">
                      <div className="product-price">
                        <del>$250.00</del>
                        <span>$190.00</span>
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
                <div className="product-item">
                  <div className="product-img">
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
                    <div className="product-bottom">
                      <div className="product-price">
                        <span>$250.00</span>
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
                    <div className="product-bottom">
                      <div className="product-price">
                        <span>$250.00</span>
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
        </div> */}
        {/* trending item end */}
        {/* big banner */}
        <div className="big-banner">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div
              className="banner-wrap"
              style={{
                backgroundImage: `url(${bigbanner})`,
              }}
            >
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="banner-content">
                    <div className="banner-info">
                      <h6>Mega Collections</h6>
                      <h2>
                        Huge Sale Up To <span>40%</span> Off
                      </h2>
                      <p>at our outlet stores</p>
                    </div>
                    <Link href="#" className="theme-btn">
                      Shop Now
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* big banner end */}
        
        {/* popular item */}
        <div className="product-area py-100">
          <div className="container">
            <div className="row">
              <div className="col-12 wow fadeInDown" data-wow-delay=".25s">
                <div className="site-heading-inline item-tab">
                  <h2 className="site-title">Popular Items</h2>
                  <ul className="nav nav-pills" id="item-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="item-tab1"
                        data-bs-toggle="pill"
                        data-bs-target="#pill-item-tab1"
                        type="button"
                        role="tab"
                        aria-controls="pill-item-tab1"
                        aria-selected="true"
                      >
                        All Items
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="item-tab2"
                        data-bs-toggle="pill"
                        data-bs-target="#pill-item-tab2"
                        type="button"
                        role="tab"
                        aria-controls="pill-item-tab2"
                        aria-selected="false"
                      >
                        Bedroom
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="item-tab3"
                        data-bs-toggle="pill"
                        data-bs-target="#pill-item-tab3"
                        type="button"
                        role="tab"
                        aria-controls="pill-item-tab3"
                        aria-selected="false"
                      >
                        Decoration
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="item-tab4"
                        data-bs-toggle="pill"
                        data-bs-target="#pill-item-tab4"
                        type="button"
                        role="tab"
                        aria-controls="pill-item-tab4"
                        aria-selected="false"
                      >
                        Living Room
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-content wow fadeInUp"
              data-wow-delay=".25s"
              id="item-tabContent"
            >
              <div
                className="tab-pane show active"
                id="pill-item-tab1"
                role="tabpanel"
                aria-labelledby="item-tab1"
                tabIndex={0}
              >
                <ViewPopularItems />
              </div>
              <div
                className="tab-pane"
                id="pill-item-tab2"
                role="tabpanel"
                aria-labelledby="item-tab2"
                tabIndex={0}
              >
                <div className="row g-3">
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type new">New</span>
                        <Link href="shop-single.html">
                          <img src={product10} alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type hot">Hot</span>
                        <Link href="shop-single.html">
                          <img src={product11} alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type oos">Out Of Stock</span>
                        <Link href="shop-single.html">
                          <img src={product12} alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type discount">10% Off</span>
                        <Link href="shop-single.html">
                          <img src={product13} alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <del>$250.00</del>
                            <span>$190.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <Link href="shop-single.html">
                          <img src={product16} alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
              <div
                className="tab-pane"
                id="pill-item-tab3"
                role="tabpanel"
                aria-labelledby="item-tab3"
                tabIndex={0}
              >
                <div className="row g-3">
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type new">New</span>
                        <Link href="shop-single.html">
                          <img src="assets/img/product/17.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type hot">Hot</span>
                        <Link href="shop-single.html">
                          <img src="assets/img/product/18.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type oos">Out Of Stock</span>
                        <Link href="shop-single.html">
                          <img src="assets/img/product/19.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type discount">10% Off</span>
                        <Link href="shop-single.html">
                          <img src="assets/img/product/20.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <del>$250.00</del>
                            <span>$190.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <Link href="shop-single.html">
                          <img src="assets/img/product/21.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
              <div
                className="tab-pane"
                id="pill-item-tab4"
                role="tabpanel"
                aria-labelledby="item-tab4"
                tabIndex={0}
              >
                <div className="row g-3">
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type new">New</span>
                        <Link href="shop-single.html">
                          <img src="assets/img/product/22.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type hot">Hot</span>
                        <Link href="shop-single.html">
                          <img src="assets/img/product/23.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type oos">Out Of Stock</span>
                        <Link href="shop-single.html">
                          <img src="assets/img/product/24.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <span className="type discount">10% Off</span>
                        <Link href="shop-single.html">
                          <img src="assets/img/product/25.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <del>$250.00</del>
                            <span>$190.00</span>
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
                  <div className="col-md-6 col-lg-4 col-xl">
                    <div className="product-item">
                      <div className="product-img">
                        <Link href="shop-single.html">
                          <img src="assets/img/product/26.png" alt="" />
                        </Link>
                        <div className="product-action-wrap">
                          <div className="product-action">
                            <Link
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Quick View"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
                              data-tooltip="tooltip"
                              title="Add To Wishlist"
                            >
                              <i className="far fa-heart" />
                            </Link>
                            <Link
                              href="#"
                              data-bs-placement="top"
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
                          <Link href="shop-single.html">
                            Simple Denim Chair
                          </Link>
                        </h3>
                        <div className="product-rate">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <div className="product-bottom">
                          <div className="product-price">
                            <span>$250.00</span>
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
            </div>
          </div>
        </div>
        {/* popular item end */}

        {/* deal area */}
        <div className="deal-area bg pt-50 pb-50">
          <div className="deal-text-shape">Deal</div>
          <div className="container">
            <div className="deal-wrap wow fadeInUp" data-wow-delay=".25s">
              <div className="deal-slider owl-carousel owl-theme">
                <div className="deal-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="deal-content">
                        <div className="deal-info">
                          <span>This Week Deal</span>
                          <h1>Best Sofa Furniture Deal</h1>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which don't
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="deal-countdown">
                          <div
                            className="countdown"
                            data-countdown="2025/12/30"
                          />
                        </div>
                        <Link href="#" className="theme-btn theme-btn2">
                          Shop Now <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="deal-img">
                        <img src="assets/img/product/b7.png" alt="" />
                        <div className="deal-discount">
                          <span>45%</span>
                          <span>off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deal-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="deal-content">
                        <div className="deal-info">
                          <span>Get 45% Off</span>
                          <h1>Best Sofa Furniture Deal</h1>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which don't
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="deal-countdown">
                          <div
                            className="countdown"
                            data-countdown="2025/12/30"
                          />
                        </div>
                        <Link href="#" className="theme-btn theme-btn2">
                          Shop Now <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="deal-img">
                        <img src="assets/img/product/b2.png" alt="" />
                        <div className="deal-discount">
                          <span>45%</span>
                          <span>off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deal-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="deal-content">
                        <div className="deal-info">
                          <span>Get 20% Off</span>
                          <h1>Best Sofa Furniture Deal</h1>
                          <p>
                            There are many variations of passages available but
                            the majority have suffered alteration in some form
                            by injected humour, or randomised words which don't
                            look even slightly believable.
                          </p>
                        </div>
                        <div className="deal-countdown">
                          <div
                            className="countdown"
                            data-countdown="2025/12/30"
                          />
                        </div>
                        <Link href="#" className="theme-btn theme-btn2">
                          Shop Now <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="deal-img">
                        <img src="assets/img/product/b10.png" alt="" />
                        <div className="deal-discount">
                          <span>45%</span>
                          <span>off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* deal area end */}
        {/* product list */}
        <div className="product-list py-100">
          <div className="container wow fadeInUp" data-wow-delay=".25s">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="product-list-box">
                  <h2 className="product-list-title">On sale</h2>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product1} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product2} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product3} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="product-list-box">
                  <h2 className="product-list-title">Best Seller</h2>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product4} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product5} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product6} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="product-list-box">
                  <h2 className="product-list-title">Top Rated</h2>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product7} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product8} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                  <div className="product-list-item">
                    <div className="product-list-img">
                      <Link href="shop-single.html">
                        <img src={product9} alt="#" />
                      </Link>
                    </div>
                    <div className="product-list-content">
                      <h4>
                        <Link href="shop-single.html">Simple Denim Chair</Link>
                      </h4>
                      <div className="product-list-rate">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="product-list-price">
                        <del>60.00</del>
                        <span>$40.00</span>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="product-list-btn"
                      data-bs-placement="left"
                      data-tooltip="tooltip"
                      title="Add To Cart"
                    >
                      <i className="far fa-shopping-bag" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product list end */}
        
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

export default Home;
