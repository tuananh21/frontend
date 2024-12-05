import axios from "axios";

const PRODUCT_URL = "http://localhost:8080/api/products"

export const getProducts = async () => {
    try{
        const response = await axios.get(PRODUCT_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching product", error);
        throw error;
    } 
};