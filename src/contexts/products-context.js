import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    //To ensure shop data is only added once to categories using the add collection and documents method
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }

        getCategoriesMap();
    }, []);
    
    const value = {products};
    return(
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
}