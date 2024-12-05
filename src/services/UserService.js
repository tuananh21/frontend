import axios from "axios";

const USER_URL = "http://localhost:8080/api/users"

export const getUser = async () => {
    try{
        const response = await axios.get(USER_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching user", error);
        throw error;
    } 
};