import React, { createContext, useState, useEffect } from "react";
import { retrieveProducts } from '../API/ApiProduct';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await retrieveProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error in fetchProducts:', error);
            }
        };

        fetchProducts();
    }, []);

    const contextValue = { products };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
