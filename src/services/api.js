import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getProducts = async () => {
    try{
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