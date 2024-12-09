import { useEffect, useState } from "react";
import { fetchCartItems, removeCartItem, updateCartItemQuantity } from "../../services/api";
import { Link } from "react-router-dom";



const ViewCartProducts = () => {
    const [productCarts, setCartItems] = useState([]);

    const loadCartItems = () => {
        fetchCartItems()
            .then((products) => {
                setCartItems(products);
            })
            .catch((err) => console.log(err));
    };

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;

        updateCartItemQuantity(id, newQuantity)
            .then(() => {
                setCartItems((prevCarts) =>
                    prevCarts.map((item) =>
                        item.product.id === id ? { ...item, quantity: newQuantity } : item
                    )
                );
            })
            .catch((err) => console.error("Error updating quantity:", err));
    };

    const handleRemoveItem = (id) => {
        removeCartItem(id)
            .then(() => {
                setCartItems((prevCarts) => prevCarts.filter((item) => item.id !== id));
            })
            .catch((err) => console.error("Error removing item:", err));
    };

    useEffect(() => {
        loadCartItems();
    }, []);

    return (
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
                                            <span>Color:</span> {item.product.color.name}
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
                                    onClick={() => handleRemoveItem(item.id)}
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
    )
}

export default ViewCartProducts;