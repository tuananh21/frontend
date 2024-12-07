import axios from "axios";
import { getHeaders } from "../utils/HeaderUtils";


// Config 
const BASE_URL = "http://localhost:8080";
const TOKEN = localStorage.getItem("token");

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product", error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

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


export const removeCartItem = (id) => {
    return axios
        .delete(`${BASE_URL}/cart/del?id=${id}`, { headers: getHeaders(TOKEN) })
        .then((res) => res.data)
        .catch((err) => {
            console.error("Error removing cart item:", err);
            throw err;
        });
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

export const updateCartSummary = async () => {
    try {
        const response = await axios.put(`${BASE_URL}/summary/update`, {}, { headers: getHeaders(TOKEN) });
        return response.data;
    } catch (error) {
        console.error("Error updating cart summary:", error);
        throw error;
    }
};

export const fetchCartSummary = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/summary/show`, { headers: getHeaders(TOKEN) });
        return response.data;
    } catch (error) {
        console.error("Error fetching cart summary:", error);
        throw error;
    }
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