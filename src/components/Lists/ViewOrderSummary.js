import { useEffect, useState } from "react";
import { getCartSummary } from "../../services/api";



const ViewOrderSummary = () => {

    const [orderSummary, setOrderSummary] = useState({
        discount: 0,
        subtotal: 0,
        tax: 0,
        total: 0,
    });

    const loadOrderSummary = async () => {
        const userId = localStorage.getItem("userId");
        try {
            const data = await getCartSummary(userId);
            setOrderSummary(data);
        } catch (error) {
            console.error("Error while loading order summary:", error);
        }
    };

    useEffect(() => {
        loadOrderSummary();
    }, []);
    return (
        <div className="col-lg-4">
            <div className="shop-cart-summary">
                <h5>Cart Summary</h5>
                <ul>
                    <li>
                        <strong>Sub Total:</strong>
                        <span>${orderSummary.subtotal}</span>
                    </li>
                    <li>
                        <strong>Discount:</strong>
                        <span>${orderSummary.discount}</span>
                    </li>
                    <li>
                        <strong>Shipping:</strong>
                        <span>Free</span>
                    </li>
                    <li>
                        <strong>Taxes:</strong>
                        <span>${orderSummary.tax}</span>
                    </li>
                    <li className="shop-cart-total">
                        <strong>Total:</strong>
                        <span>${orderSummary.total}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default ViewOrderSummary;