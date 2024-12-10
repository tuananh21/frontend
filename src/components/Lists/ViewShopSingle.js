import { useEffect, useState } from "react";
import { fetchShopSingle } from "../../services/api";
import { useParams } from "react-router-dom";



const ViewShopSingle = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState(null);
    useEffect(() => {
        const getProductData = async () => {
            try {
                const data = await fetchShopSingle(productId);
                console.log("Fetched data:", data); // Kiểm tra dữ liệu trả về
                setProduct(data);
                setImages(data.images || []);
            } catch (err) {
                console.error("Error fetching product data:", err);
            }
        };
    
        getProductData();
    }, [productId]);
    
    return (
        <>
            <div className="shop-single py-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-lg-6 col-xxl-5">
                            <div className="shop-single-gallery">
                                <a
                                    className="shop-single-video popup-youtube"
                                    href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                                    data-tooltip="tooltip"
                                    title="Watch Video"
                                >
                                    <i className="far fa-play" />
                                </a>
                                <div className="flexslider-thumbnails">
                                    <ul className="slides">
                                        {product && product.image ? (
                                            <li data-thumb={product.image} rel="adjustX:10, adjustY:">
                                                <img src={product.image} alt={product.name} />
                                            </li>
                                        ) : (
                                            <li>Loading...</li>
                                        )}
                                        {images && images.length > 0
                                            ? images.map((img, index) => (
                                                <li key={index} data-thumb={img.url}>
                                                    {/* <img src={img.url} alt="#" /> */}
                                                </li>
                                            ))
                                            : null}
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {product && (
                            <div className="col-md-12 col-lg-6 col-xxl-6">
                                <div className="shop-single-info">
                                    <h4 className="shop-single-title">{product.name}</h4>
                                    <div className="shop-single-rating">
                                        <div className="product-rate">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <i key={index} className={index < (product.rating || 0) ? "fas fa-star" : "far fa-star"} />
                                            ))}
                                        </div>
                                        <span className="rating-count"> (4 Customer Reviews)</span>
                                    </div>
                                    <div className="shop-single-price">
                                        <del>${(product.price / 100) * product.sale}</del>
                                        <span className="amount">${product.price}</span>
                                        <span className="discount-percentage">{product.sale}% Off</span>
                                    </div>
                                    <p className="mb-3">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some
                                        form, by injected humour, or randomised words which don't
                                        look even slightly believable.
                                    </p>
                                    <div className="shop-single-cs">
                                        <div className="row">
                                            <div className="col-md-3 col-lg-4 col-xl-3">
                                                <div className="shop-single-size">
                                                    <h6>Quantity</h6>
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
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-lg-4 col-xl-3">
                                                <div className="shop-single-size">
                                                    <h6>Size</h6>
                                                    <select className="select">
                                                        <option value="">Choose Size</option>
                                                        <option value={1}>Extra Small</option>
                                                        <option value={2}>Small</option>
                                                        <option value={3}>Medium</option>
                                                        <option value={4}>Extra Large</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-12 col-xl-6">
                                                <div className="shop-single-color">
                                                    <h6>Color</h6>
                                                    <ul className="shop-checkbox-list color">
                                                        <li>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="color1"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="color1"
                                                                >
                                                                    <span
                                                                        style={{ backgroundColor: "#606ddd" }}
                                                                    />
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
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="color2"
                                                                >
                                                                    <span
                                                                        style={{ backgroundColor: "#4caf50" }}
                                                                    />
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
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="color3"
                                                                >
                                                                    <span
                                                                        style={{ backgroundColor: "#17a2b8" }}
                                                                    />
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
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="color4"
                                                                >
                                                                    <span
                                                                        style={{ backgroundColor: "#ffc107" }}
                                                                    />
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
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="color5"
                                                                >
                                                                    <span
                                                                        style={{ backgroundColor: "#f44336" }}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shop-single-sortinfo">
                                        <ul>
                                            <li>
                                                Stock: <span>Available</span>
                                            </li>
                                            <li>
                                                SKU: <span>656TYTR</span>
                                            </li>
                                            <li>
                                                Category: <span>Living Room</span>
                                            </li>
                                            <li>
                                                Brand: <a href="#">Novak</a>
                                            </li>
                                            <li>
                                                Tags: <a href="#">Furniture</a>,<a href="#">Chair</a>,
                                                <a href="#">Modern</a>,<a href="#">Shop</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="shop-single-action">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 col-lg-12 col-xl-6">
                                                <div className="shop-single-btn">
                                                    <a href="#" className="theme-btn">
                                                        <span className="far fa-shopping-bag" />
                                                        Add To Cart
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="theme-btn theme-btn2"
                                                        data-tooltip="tooltip"
                                                        title="Add To Wishlist"
                                                    >
                                                        <span className="far fa-heart" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="theme-btn theme-btn2"
                                                        data-tooltip="tooltip"
                                                        title="Add To Compare"
                                                    >
                                                        <span className="far fa-arrows-repeat" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-12 col-xl-6">
                                                <div className="shop-single-share">
                                                    <span>Share:</span>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fab fa-x-twitter" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                    <a href="#">
                                                        <i className="fab fa-pinterest-p" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* shop single details */}
                    <div className="shop-single-details">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button
                                    className="nav-link active"
                                    id="nav-tab1"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab1"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab1"
                                    aria-selected="true"
                                >
                                    Description
                                </button>
                                <button
                                    className="nav-link"
                                    id="nav-tab2"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab2"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab2"
                                    aria-selected="false"
                                >
                                    Additional Info
                                </button>
                                <button
                                    className="nav-link"
                                    id="nav-tab3"
                                    data-bs-toggle="tab"
                                    data-bs-target="#tab3"
                                    type="button"
                                    role="tab"
                                    aria-controls="tab3"
                                    aria-selected="false"
                                >
                                    Reviews (05)
                                </button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="tab1"
                                role="tabpanel"
                                aria-labelledby="nav-tab1"
                            >
                                <div className="shop-single-desc">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in
                                        some form, by injected humour, or randomised words which
                                        don't look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there
                                        isn't anything embarrassing hidden in the middle of text.
                                        All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the
                                        first true generator on the Internet.
                                    </p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                                        odit aut fugit, sed quia consequuntur magni dolores eos
                                        qui ratione voluptatem sequi nesciunt. Neque porro
                                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                                        consectetur, adipisci velit.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-5 col-xl-4">
                                            <div className="shop-single-list">
                                                <h5 className="title">Features</h5>
                                                <ul>
                                                    <li>Modern Art Deco Chaise Lounge</li>
                                                    <li>Unique cylindrical design copper finish</li>
                                                    <li>Covered in grey velvet fabric</li>
                                                    <li>Modern Bookcase in Copper Colored Finish</li>
                                                    <li>Use of Modern Materials</li>
                                                    <li>Mirrored compartments and upgraded interior</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-xl-5">
                                            <div className="shop-single-list">
                                                <h5 className="title">Specifications</h5>
                                                <ul>
                                                    <li>
                                                        <span>Dimensions:</span> 4ft W x 7ft h
                                                    </li>
                                                    <li>
                                                        <span>Model Year:</span> 2024
                                                    </li>
                                                    <li>
                                                        <span>Available Sizes:</span> 8.5, 9.0, 9.5, 10.0
                                                    </li>
                                                    <li>
                                                        <span>Manufacturer:</span> Reebok Inc.
                                                    </li>
                                                    <li>
                                                        <span>Available Colors:</span>{" "}
                                                        White/Red/Blue,Black/Orange/Green
                                                    </li>
                                                    <li>
                                                        <span>Made In:</span> USA
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab2"
                                role="tabpanel"
                                aria-labelledby="nav-tab2"
                            >
                                <div className="shop-single-additional">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in
                                        some form, by injected humour, or randomised words which
                                        don't look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there
                                        isn't anything embarrassing hidden in the middle of text.
                                        All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the
                                        first true generator on the Internet.
                                    </p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                                        odit aut fugit, sed quia consequuntur magni dolores eos
                                        qui ratione voluptatem sequi nesciunt. Neque porro
                                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                                        consectetur, adipisci velit.
                                    </p>
                                    <div className="shop-single-list">
                                        <h5 className="title">Shipping Options:</h5>
                                        <ul>
                                            <li>
                                                <span>Standard:</span> 6-7 Days, Shipping Cost - Free
                                            </li>
                                            <li>
                                                <span>Express:</span> 1-2 Days, Shipping Cost - $20
                                            </li>
                                            <li>
                                                <span>Courier:</span> 2-3 Days, Shipping Cost - $30
                                            </li>
                                            <li>
                                                <span>Fastgo:</span> 1-3 Days, Shipping Cost - $15
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab3"
                                role="tabpanel"
                                aria-labelledby="nav-tab3"
                            >
                                <div className="shop-single-review">
                                    <div className="blog-comments">
                                        <h5>Reviews (05)</h5>
                                        <div className="blog-comments-wrap">
                                            <div className="blog-comments-item mt-0">
                                                <img src="assets/img/blog/com-1.jpg" alt="thumb" />
                                                <div className="blog-comments-content">
                                                    <h5>Sinkler Denola</h5>
                                                    <span>
                                                        <i className="far fa-clock" /> August 20, 2024
                                                    </span>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing
                                                        and typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the when
                                                        an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen book. It has
                                                        survived not only five centuries but also the leap
                                                        electronic typesetting, remaining essentially
                                                        unchanged. It was popularised in the with the
                                                        release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop
                                                        publishing software like Aldus PageMaker including
                                                        versions of Lorem Ipsum.
                                                    </p>
                                                    <a href="#">
                                                        <i className="far fa-reply" /> Reply
                                                    </a>
                                                    <div className="review-rating">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="blog-comments-item ms-md-5">
                                                <img src="assets/img/blog/com-2.jpg" alt="thumb" />
                                                <div className="blog-comments-content">
                                                    <h5>Daniel Wellman</h5>
                                                    <span>
                                                        <i className="far fa-clock" /> August 20, 2024
                                                    </span>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing
                                                        and typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the when
                                                        an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen book. It has
                                                        survived not only five centuries but also the leap
                                                        electronic typesetting, remaining essentially
                                                        unchanged. It was popularised in the with the
                                                        release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop
                                                        publishing software like Aldus PageMaker including
                                                        versions of Lorem Ipsum.
                                                    </p>
                                                    <a href="#">
                                                        <i className="far fa-reply" /> Reply
                                                    </a>
                                                    <div className="review-rating">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="blog-comments-item">
                                                <img src="assets/img/blog/com-3.jpg" alt="thumb" />
                                                <div className="blog-comments-content">
                                                    <h5>Kenneth Evans</h5>
                                                    <span>
                                                        <i className="far fa-clock" /> August 20, 2024
                                                    </span>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing
                                                        and typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the when
                                                        an unknown printer took a galley of type and
                                                        scrambled it to make a type specimen book. It has
                                                        survived not only five centuries but also the leap
                                                        electronic typesetting, remaining essentially
                                                        unchanged. It was popularised in the with the
                                                        release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop
                                                        publishing software like Aldus PageMaker including
                                                        versions of Lorem Ipsum.
                                                    </p>
                                                    <a href="#">
                                                        <i className="far fa-reply" /> Reply
                                                    </a>
                                                    <div className="review-rating">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-comments-form">
                                            <h4 className="mb-4">Leave A Review</h4>
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Your Name*"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Your Email*"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Your Subject*"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <select className="form-control form-select">
                                                                <option value="">Your Rating</option>
                                                                <option value={5}>5 Stars</option>
                                                                <option value={4}>4 Stars</option>
                                                                <option value={3}>3 Stars</option>
                                                                <option value={2}>2 Stars</option>
                                                                <option value={1}>1 Star</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                className="form-control"
                                                                rows={5}
                                                                placeholder="Your Review*"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        <button type="submit" className="theme-btn">
                                                            <span className="far fa-paper-plane" /> Submit
                                                            Review
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* shop single details end */}
                    {/* related item */}
                    <div className="product-area related-item pt-40">
                        <div className="container px-0">
                            <div className="row">
                                <div className="col-12">
                                    <div className="site-heading-inline">
                                        <h2 className="site-title">Related Items</h2>
                                        <a href="#">
                                            View More <i className="fas fa-arrow-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 item-2">
                                <div className="col-md-6 col-lg-3">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <span className="type new">New</span>
                                            <a href="shop-single.html">
                                                <img src="assets/img/product/07.png" alt="" />
                                            </a>
                                            <div className="product-action-wrap">
                                                <div className="product-action">
                                                    <a
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quickview"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Quick View"
                                                    >
                                                        <i className="far fa-eye" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Add To Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Add To Compare"
                                                    >
                                                        <i className="far fa-arrows-repeat" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h3 className="product-title">
                                                <a href="shop-single.html">Simple Denim Chair</a>
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
                                <div className="col-md-6 col-lg-3">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <span className="type hot">Hot</span>
                                            <a href="shop-single.html">
                                                <img src="assets/img/product/08.png" alt="" />
                                            </a>
                                            <div className="product-action-wrap">
                                                <div className="product-action">
                                                    <a
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quickview"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Quick View"
                                                    >
                                                        <i className="far fa-eye" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Add To Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Add To Compare"
                                                    >
                                                        <i className="far fa-arrows-repeat" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h3 className="product-title">
                                                <a href="shop-single.html">Simple Denim Chair</a>
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
                                <div className="col-md-6 col-lg-3">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <span className="type oos">Out Of Stock</span>
                                            <a href="shop-single.html">
                                                <img src="assets/img/product/12.png" alt="" />
                                            </a>
                                            <div className="product-action-wrap">
                                                <div className="product-action">
                                                    <a
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quickview"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Quick View"
                                                    >
                                                        <i className="far fa-eye" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Add To Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Add To Compare"
                                                    >
                                                        <i className="far fa-arrows-repeat" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h3 className="product-title">
                                                <a href="shop-single.html">Simple Denim Chair</a>
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
                                <div className="col-md-6 col-lg-3">
                                    <div className="product-item">
                                        <div className="product-img">
                                            <span className="type discount">10% Off</span>
                                            <a href="shop-single.html">
                                                <img src="assets/img/product/14.png" alt="" />
                                            </a>
                                            <div className="product-action-wrap">
                                                <div className="product-action">
                                                    <a
                                                        href="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#quickview"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Quick View"
                                                    >
                                                        <i className="far fa-eye" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Add To Wishlist"
                                                    >
                                                        <i className="far fa-heart" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        data-bs-placement="right"
                                                        data-tooltip="tooltip"
                                                        title="Add To Compare"
                                                    >
                                                        <i className="far fa-arrows-repeat" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h3 className="product-title">
                                                <a href="shop-single.html">Simple Denim Chair</a>
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
                                                    <del>$120.00</del>
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
                    </div>
                    {/* related item end */}
                </div>
            </div>
        </>
    )
}

export default ViewShopSingle;