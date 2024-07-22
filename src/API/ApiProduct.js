
import { api } from "./ApiClient";

export const retrieveProducts = async () => {
    try {
        const response = await api.get('/product');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const retrieveProductById = async (id) => {
    try {
        const response = await api.get(`/product/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};
