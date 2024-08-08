import { api } from "./ApiClient";

export const createOrderForAllProductsInDetailCart = async (totalPrice) => {
    try {
        const response = await api.post(`order/${totalPrice}`)
        return response.data;
    }
    catch (error) {
        console.error('Failed to create order:', error);
    }
} 

export const createOrderForSomeProductsInDetailCart  = async(totalPrice , productListSelected)=>{
    try {
        const response = await api.post(`order/some/${totalPrice}` , productListSelected)
        return response.data;
    }
    catch (error) {
        console.error('Failed to create order:', error);
    }
} 