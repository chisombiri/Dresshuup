import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories-context";
import CategoryPreview from "../../components/Category-Preview/Category-Preview";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
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