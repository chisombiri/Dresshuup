import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import "./ProductCard.scss";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    //calling the add item to cart function from context so it can be applied on click
    const { addItemToCart } = useContext(CartContext);

    //creating function to add product to cart, off the add item to cart context
    const addProductToCart = () => addItemToCart(product);

    return(
        <div className="product-cards-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add To Cart</Button>
        </div>
    )
}

export default ProductCard;