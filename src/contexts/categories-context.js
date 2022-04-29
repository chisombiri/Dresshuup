import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const CategoriesContext = createContext({
    categoriesMap: [],
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});

    //To ensure shop data is only added once to categories using the add collection and documents method
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setcategoriesMap(categoryMap);
            // console.log(categoryMap);
        }

        getCategoriesMap();
    }, []);
    
    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}