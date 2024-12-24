import axios from "axios";
import { getHeaders } from "../utils/HeaderUtils";


// Config 
const BASE_URL = "http://localhost:8080";
const TOKEN = localStorage.getItem("token");

// api new
export const login = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/public/login`, data);
        return response.data;
    } catch (error) {
        throw new Error("Email hoặc mật khẩu không đúng");
    }
};

export const logout = async (navigate) => {
    try {
        await axios.post(`${BASE_URL}/user/logout`, {}, { headers: getHeaders(TOKEN) });
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        navigate("/login");
    } catch (error) {
        console.error("Error during logout:", error);
        alert("Logout failed. Please try again.");
    }
};


export const fetchCartItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cart/all`, { headers: getHeaders(TOKEN) });
        return response.data;
    } catch (error) {
        console.error("Error fetching cart items:", error);
        throw error;
    }
};


export const removeCartItem = async (data) => {
    try {
        const response = await axios.delete(`${BASE_URL}/cart/del`, { data })
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateCartItemQuantity = (productId, quantity) => {
    return axios
        .put(`${BASE_URL}/cart/update`, { productId, quantity }, { headers: getHeaders(TOKEN) })
        .then((res) => res.data)
        .catch((err) => {
            console.error("Error updating cart item quantity:", err);
            throw err;
        });
};

export const getCartSummary = async (userId) => {
    return await axios.post(`${BASE_URL}/summary/get/${userId}`)
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        })
};



export const fetchPopularItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/product/popular`);
        return response.data;
    } catch (err) {
        console.error('Error fetching popular items:', err);
        throw err;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/public/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const fetchShopSingle = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/product/single/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const addToCartApi = async (baseAddToCart) => {
    try {
        const response = await axios.post(`${BASE_URL}/cart/add`, (baseAddToCart), { headers: getHeaders(TOKEN) });
        return response.data.message;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "An unexpected error occurred";
        throw new Error(errorMessage);
    }
}

export const fetchRelatedProducts = async (categoryId) => {
    return await axios.get(`${BASE_URL}/product/related/${categoryId}`)
        .then((res) => res.data)
        .catch((error) => {
            console.log("Get product related error!", error);
            throw error;
        })
}

export const getUser = async (userId) => {
    return await axios.get(`${BASE_URL}/order/getUser/${userId}`, { headers: getHeaders(TOKEN) })
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        })
}

export const fetchPayments = async () => {
    return await axios.get(`${BASE_URL}/order/payments`, { headers: getHeaders(TOKEN) })
        .then((res) => res.data)
        .catch((err) => {
            throw err
        })
}

export const createOrderApi = async (baseToOrder, navigate) => {
    try {
        await axios.post(`${BASE_URL}/order/create`, (baseToOrder), { headers: getHeaders(TOKEN) })
        navigate("/CheckoutComplete");
    } catch (error) {
        throw error;
    }
}

export const fetchProductPages = async (page) => {
    return await axios.get(`${BASE_URL}/product/page/${page}`)
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        })
}

export const fetchOrders = async () => {
    return await axios.get(`${BASE_URL}/order/all`, { headers: getHeaders(TOKEN) })
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        })
};

export const uploadFIleImage = async (formData, userId) => {
    return await axios.post(`${BASE_URL}/file/users/${userId}`, formData, { headers: getHeaders(TOKEN) })
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        })
}

export const getOrderDetailSummary = async (request) => {
    return await axios
        .post(`${BASE_URL}/summary/orderDetail`, { params: request })
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        })
}

export const fetchOrderDetails = async (request) => {
    return await axios
        .post(`${BASE_URL}/cart/orderDetails`, { params: request })
        .then((res) => res.data)
        .catch((err) => {
            throw err;
        });
};
