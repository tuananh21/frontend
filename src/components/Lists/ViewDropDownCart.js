import { useEffect, useState } from "react";
import { fetchCartItems, fetchCartSummary, updateCartSummary } from "../../services/api";
import { Link } from "react-router-dom";


const ViewDropDownCart = () => {
    const [productCarts, setProductCarts] = useState([]);
    const [ProductCount, setProductCount] = useState(0);
    const [cartSummary, setCartSummary] = useState({
        total: 0,
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await fetchCartItems();
                setProductCount(products.length);
                setProductCarts(products);

                const summary = await fetchCartSummary();
                setCartSummary(summary);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <li className="dropdown-cart">
            <Link href="#" className="list-link shop-cart">
                <i className="far fa-shopping-bag" />
                <span>{ProductCount}</span>
            </Link>
            <div className="dropdown-cart-menu">
                <div className="dropdown-cart-header">
                    <span>{ProductCount}</span>
                    <Link to="/cart">View Cart</Link>
                </div>
                <ul className="dropdown-cart-list">
                    {productCarts.length > 0 ? (
                        productCarts.map((e, i) => (
                            <li key={i}>
                                <div className="dropdown-cart-item">
                                    <div className="cart-img">
                                        <Link href="#">
                                            <img src={e.product.image} alt="product image" />
                                        </Link>
                                    </div>
                                    <div className="cart-info">
                                        <h4>
                                            <Link href="#">{e.product.name}</Link>
                                        </h4>
                                        <p className="cart-qty">
                                            {e.quantity} x -{" "}
                                            <span className="cart-amount">${e.product.price}</span>
                                        </p>
                                    </div>
                                    <Link href="#" className="cart-remove" title="Remove this item">
                                        <i className="far fa-times-circle" />
                                    </Link>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li>
                            <div className="dropdown-cart-item">
                                <p>Your cart is empty.</p>
                            </div>
                        </li>
                    )}
                </ul>
                <div className="dropdown-cart-bottom">
                    <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="total-amount">${cartSummary.total}</span>
                    </div>
                    <Link to="/checkout" className="theme-btn">
                        Checkout
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default ViewDropDownCart;