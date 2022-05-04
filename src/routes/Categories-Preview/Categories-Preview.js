import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category-selector";
import CategoryPreview from "../../components/Category-Preview/Category-Preview";


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return(
        //fragment short hand
        <>
        {
            Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (<CategoryPreview key={title} title={title} products={products} />);
            })
        }
        </>
    )
}

export default CategoriesPreview;