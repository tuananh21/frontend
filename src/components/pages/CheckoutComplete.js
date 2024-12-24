import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";


const CheckoutComplete = () => {

    return (
        <>
            <Header />
            <div class="shop-checkout-complete py-100">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 mx-auto">
                            <div class="checkout-complete-content">
                                <div class="checkout-complete-icon"><i class="far fa-check"></i></div>
                                <h3>Thank you for your order!.</h3>
                                <p>Your order has been placed and will be processed as soon as possible.Make sure you make note of
                                    your order number, which is <b>38HF654DWR</b>.You will be receiving an email shortly with confirmation
                                    of your order.</p>
                                <Link to="/" class="theme-btn">Go Back Shopping<i class="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CheckoutComplete;