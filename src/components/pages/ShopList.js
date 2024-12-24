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
import LogoImages from "../../exportImages/LogoImages";
import { useEffect, useState } from "react";
import { addToCartApi, fetchProductPages } from "../../services/api";
import { message } from "antd";

function ShopList() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getProductData = async () => {
    try {
      const data = await fetchProductPages(currentPage);
      setProducts(data);
    } catch (error) {
      console.log("Fetch product data error!", error);
    }
  }

  const handlePageClick = async (page) => {
    setCurrentPage(page);
    const data = await fetchProductPages(page);
    setProducts(data);
  };

  const handleAddToCart = async (e) => {
    const request = {
      productId: e.currentTarget.value
    };

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await addToCartApi(request);
      message.success(response);
    } catch (error) {
      message.error(error.message);
    }
    handleReload();
  }

  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload((prev) => !prev);
  };

  useEffect(() => {
    getProductData();
  }, [])
  return (
    <>
      {/* header area */}
      <Header key={reload} />
      {/* header area end */}
      <main className="main">
        {/* breadcrumb */}
        <div className="site-breadcrumb">
          <div
            className="site-breadcrumb-bg"
            style={{ backgroundImage: `url(${LogoImages.breadcrumbImage})` }}
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
                      <form action="#" onSubmit={(e) => e.preventDefault}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <button type="submit">
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
                <div className="shop-item-wrap item-list">
                  <div className="row g-4">
                    {filteredProducts.map((product) => (
                      <div className="col-md-12" key={product.id}>
                        <div className="product-item">
                          <div className="product-img">
                            <Link href="shop-single.html">
                              <img src={product.image} alt="" />
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
                              <Link to="/product">{product.name}</Link>
                            </h3>
                            <div className="product-rate">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="far fa-star" />
                            </div>
                            <p>
                              {product.description}
                            </p>
                            <div className="product-bottom">
                              <div className="product-price">
                                <span>${product.price}</span>
                              </div>
                              <button
                                type="button"
                                className="product-cart-btn"
                                data-bs-placement="left"
                                data-tooltip="tooltip"
                                title="Add To Cart"
                                value={product.id}
                                onClick={handleAddToCart}
                              >
                                <i className="far fa-shopping-bag" />
                              </button>

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredProducts.length === 0 && (
                      <div className="col-md-12">
                        <p>No products found.</p>
                      </div>
                    )}


                  </div>
                </div>
                {/* pagination */}
                <div className="pagination-area mt-50">
                  <div aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageClick(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <i className="far fa-arrow-left" />
                        </button>
                      </li>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
                        <li
                          key={page}
                          className={`page-item ${currentPage === page ? "active" : ""}`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageClick(page)}
                          >
                            {page}
                          </button>
                        </li>
                      ))}
                      <li className="page-item">
                        <button
                          className="page-link"
                          onClick={() => handlePageClick(currentPage + 1)}
                        >
                          <i className="far fa-arrow-right" />
                        </button>
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
      {/* js */}
    </>
  );
}

export default ShopList;