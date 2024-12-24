import { useEffect, useState } from "react";
import { getOrderDetailSummary } from "../../services/api";



const ViewOrderDetailSummary = ({orderId}) => {

    const [orderDetailSummary, setOrderDetailSummary] = useState({
        subtotal: 0,
        discount: 0,
        tax: 0,
        total: 0,
    });

    const getSummary = async () => {
        const userId = localStorage.getItem("userId");

        const request = {
            orderId: orderId,
            userId: userId
        }
        
        try {
            const response = await getOrderDetailSummary(request);
            setOrderDetailSummary(response);
        } catch (error) {
            console.log("Get summary error :", error);
        }
    }

    useEffect(() => {
        getSummary();
    }, []);

    return (
        <>
            <div className="col-lg-6">
                <div className="order-detail-content">
                    <h5>Order Summary</h5>
                    <ul>
                        <li>
                            Subtotal<span>${orderDetailSummary.subtotal}</span>
                        </li>
                        <li>
                            Shipping<span>Free</span>
                        </li>
                        <li>
                            Discount<span>${orderDetailSummary.discount}</span>
                        </li>
                        <li>
                            Tax<span>${orderDetailSummary.tax}</span>
                        </li>
                        <li>
                            Total<span>${orderDetailSummary.total}</span>
                        </li>
                    </ul>
                    <p className="mt-4">Paid by Credit/Debit Card</p>
                </div>
            </div>
        </>
    )
}

export default ViewOrderDetailSummary;