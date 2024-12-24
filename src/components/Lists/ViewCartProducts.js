import { useEffect, useState } from "react";
import { fetchCartItems, getCartSummary, removeCartItem, updateCartItemQuantity } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";


const ViewCartProducts = () => {
    const navigate = useNavigate();
    const [productCarts, setCartItems] = useState([]);
    const [cartSummary, setCartSummary] = useState({
        subtotal: 0,
        discount: 0,
        tax: 0,
        total: 0,
    });

    const loadCartItems = () => {
        if (!localStorage.getItem("token")) return;

        fetchCartItems()
            .then((products) => {
                setCartItems(products);
            })
            .catch((err) => console.log("Error fetch cart items: ", err));
    };

    const handleQuantityChange = async (id, newQuantity) => {
        if (newQuantity < 1) return;

        try {
            await updateCartItemQuantity(id, newQuantity)
            setCartItems((prevCarts) =>
                prevCarts.map((item) =>
                    item.product.id === id ? { ...item, quantity: newQuantity } : item
                ));
            await loadCartSummary();
        } catch (error) {
            console.error("Error updating quantity : ", error);
        }
    };

    const handleRemoveItem = async (productId) => {
        const userId = localStorage.getItem("userId");
    
        const base = {
            productId: productId,
            userId: userId
        };

        try {
            await removeCartItem(base);
            await loadCartItems();
            await loadCartSummary();
        } catch (err) {
            console.error("Error removing item:", err);
        }
    };


    const loadCartSummary = async () => {
        if (!localStorage.getItem("userId")) return;
        const userId = localStorage.getItem("userId");
        try {
            const data = await getCartSummary(userId);
            setCartSummary(data);
        } catch (error) {
            console.error("Error while loading cart summary:", error);
        }
    };

    const handleCheckout = () => {
        if (cartSummary.total === 0) {
            message.error("Your cart is empty. Please add some items before proceeding to checkout.");
            return;
        }
        navigate("/checkout");
    };

    useEffect(() => {
        loadCartItems();
        loadCartSummary();
    }, []);

    return (
        <div className="row">
            {/* Cart Table */}
            <div className="col-lg-8">
                <div className="cart-table">
                    <div className="table-responsive">
                        {/* View cart products */}
                        <table className="table">
                            <thead style={{ paddingBottom: "1px solid" }}>
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
                                {productCarts.length > 0 ? (
                                    productCarts.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="shop-cart-img">
                                                    <Link href="#">
                                                        <img src={item.product.image} alt={item.product.name} />
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="shop-cart-content">
                                                    <h5 className="shop-cart-name">
                                                        <Link href="#">{item.product.name}</Link>
                                                    </h5>
                                                    <div className="shop-cart-info">
                                                        <p>
                                                            <span>Type:</span> {item.product.description}
                                                        </p>
                                                        <p>
                                                            <span>Color:</span> { }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="shop-cart-price">
                                                    <span>${item.product.price}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="shop-cart-qty">
                                                    <button
                                                        className="minus-btn"
                                                        onClick={() =>
                                                            handleQuantityChange(item.product.id, item.quantity - 1)
                                                        }
                                                    >
                                                        <i className="fal fa-minus" />
                                                    </button>
                                                    <input
                                                        className="quantity"
                                                        type="text"
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            handleQuantityChange(item.product.id, Number(e.target.value))
                                                        }
                                                    />
                                                    <button
                                                        className="plus-btn"
                                                        onClick={() =>
                                                            handleQuantityChange(item.product.id, item.quantity + 1)
                                                        }
                                                    >
                                                        <i className="fal fa-plus" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="shop-cart-subtotal">
                                                    <span>
                                                        ${(item.product.price * item.quantity)}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="shop-cart-remove"
                                                    onClick={() => handleRemoveItem(item.product.id)}
                                                >
                                                    <i className="far fa-times" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">
                                            No items in the cart.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* View cart product end */}
                    </div>
                </div>
                <div className="shop-cart-footer">
                    <div className="row">
                        <div className="col-md-7 col-lg-6"></div>
                        <div className="col-md-5 col-lg-6">
                            <div className="shop-cart-btn text-md-end">
                                <Link to="/shoplist" className="theme-btn">
                                    <span className="fas fa-arrow-left" /> Continue
                                    Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cart Summary */}
            <div className="col-lg-4">
                <div className="shop-cart-summary">
                    <h5>Cart Summary</h5>
                    <ul>
                        <li>
                            <strong>Sub Total:</strong>
                            <span>${cartSummary.subtotal}</span>
                        </li>
                        <li>
                            <strong>Discount:</strong>
                            <span>${cartSummary.discount}</span>
                        </li>
                        <li>
                            <strong>Shipping:</strong>
                            <span>Free</span>
                        </li>
                        <li>
                            <strong>Taxes:</strong>
                            <span>${cartSummary.tax}</span>
                        </li>
                        <li className="shop-cart-total">
                            <strong>Total:</strong>
                            <span>${cartSummary.total}</span>
                        </li>
                    </ul>
                    <div className="text-end mt-40">
                        <button
                            className="theme-btn"
                            onClick={handleCheckout}>
                            Checkout Now
                            <i className="fas fa-arrow-right" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Cart Summary end */}
        </div>
    )
}

export default ViewCartProducts;