import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category-selector";
import CategoryPreview from "../../components/Category-Preview/Category-Preview";
import Spinner from "../../components/Spinner/Spinner";


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return(
        //fragment short hand
        <>
        {
            isLoading ? <Spinner /> 
            :
            (Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (<CategoryPreview key={title} title={title} products={products} />);
            }))
        }
        </>
    )
}

export default CategoriesPreview;