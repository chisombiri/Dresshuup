import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    //To ensure shop data is only added once to categories using the add collection and documents method
    
    const value = {products};
    return(
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
}