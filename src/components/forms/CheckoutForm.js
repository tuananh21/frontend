import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrderApi, fetchPayments, getUser } from "../../services/api";


const CheckoutForm = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [payments, setPayments] = useState([]);
    const [formData, setFormData] = useState({
        userId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        shippingAddress: "",
        paymentMethodId: "",
        message: "",
    });

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "A valid Email is required";
        if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone))
            newErrors.phone = "A valid Phone Number is required (10-15 digits)";
        if (!formData.shippingAddress.trim())
            newErrors.shippingAddress = "Shipping Address is required";
        if (!formData.paymentMethodId.trim())
            newErrors.paymentMethodId = "Please select a Payment Method";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const setInfoUser = async () => {
        const userId = localStorage.getItem("userId");
        try {
            const info = await getUser(userId);
            setFormData({
                userId: userId || "",
                firstName: info.firstName || "",
                lastName: info.lastName || "",
                email: info.email || "",
                phone: info.phone || "",
                shippingAddress: info.address || "",
            });
        } catch (error) {
            console.log("Get info user error!", error);
        }
    }

    const getPayMethod = async () => {
        try {
            const data = await fetchPayments();
            setPayments(data);
        } catch (error) {
            console.log("Get payments error!", error);
        }
    }

    const toCart = () => {
        navigate("/cart");
    }

    const handleSubmit = async () => {
        try {
            if (validateForm()) {
                await createOrderApi(formData, navigate);
            }
        } catch (error) {
            console.log("Create order error!", error);
        }

    };

    useEffect(() => {
        setInfoUser();
        getPayMethod();
    }, [])
    return (
        <div className="col-lg-8">
            <div className="shop-checkout-step">
                <div className="accordion" id="shopCheckout">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#checkoutStep1"
                                aria-expanded="true"
                                aria-controls="checkoutStep1"
                            >
                                Your Billing Address
                            </button>
                        </h2>
                        <div
                            id="checkoutStep1"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#shopCheckout"
                        >
                            <div className="accordion-body">
                                <div className="shop-checkout-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.firstName && (
                                                        <span style={{color: "red"}} className="text-danger">{errors.firstName}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.lastName && (
                                                        <span className="text-danger">{errors.lastName}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.email && (
                                                        <span className="text-danger">{errors.email}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Phone</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone Number"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.phone && (
                                                        <span className="text-danger">{errors.phone}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Shipping address"
                                                        name="shippingAddress"
                                                        value={formData.shippingAddress}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.address && (
                                                        <span className="text-danger">{errors.address}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <select
                                                        style={{ padding: "10px" }}
                                                        className="select"
                                                        name="paymentMethodId"
                                                        value={formData.paymentMethodId}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Payment Method</option>
                                                        {payments.map((e, i) => (
                                                            <option key={i} value={e.id}>
                                                                {e.methodName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.paymentMethodId && (
                                                            <p style={{color: "red"}}>{errors.paymentMethodId}</p>
                                                        )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Your Message For Order</label>
                                                    <textarea
                                                        cols={30}
                                                        rows={4}
                                                        className="form-control"
                                                        placeholder="Your Message"
                                                        defaultValue={""}
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                    />
                                                   
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button
                                                    type="button"
                                                    className="theme-btn theme-btn2"
                                                    onClick={toCart}
                                                >
                                                    <span className="fas fa-arrow-left" />
                                                    Back To Cart
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="theme-btn"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleSubmit();
                                                    }}
                                                >
                                                    Pay Now
                                                    <i className="fas fa-arrow-right" />
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
        </div>
    )
};

export default CheckoutForm;