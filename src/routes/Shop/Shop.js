import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories-context";
import CategoryPreview from "../../components/Category-Preview/Category-Preview";
import "./Shop.scss"

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return(
        <div className="shop-container">
        {
            Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (<CategoryPreview key={title} title={title} products={products} />);
            })
        }
        </div>
    )
}

export default Shop;