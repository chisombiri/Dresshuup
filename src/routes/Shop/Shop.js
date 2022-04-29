import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Categories-Preview/Categories-Preview";
import Category from "../Category/Category";

const Shop = () => {
    return(
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<Category/>} />
        </Routes>
    );
};

export default Shop;