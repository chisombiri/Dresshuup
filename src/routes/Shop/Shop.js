import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../Categories-Preview/Categories-Preview";
import Category from "../Category/Category";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { fetchCategoriesStart } from "../../store/categories/category-action";

const Shop = () => {
  const dispatch = useDispatch();

  //To ensure shop data is only added once to categories using the add collection and documents method
  useEffect(() => {
    dispatch(fetchCategoriesStart());

    /* const getCategoriesMap = async () => {
           const categoriesArray = await getCategoriesAndDocuments('categories');
         };
        getCategoriesMap(); */
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
