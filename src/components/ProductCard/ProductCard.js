import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from '../../store/cart/cart-action';
import { selectCartItems } from '../../store/cart/cart-selector';

import "./product-card.scss";
import Button, { button_type_classes } from "../Button/Button";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    //calling the add item to cart function from context so it can be applied on click
    // const { addItemToCart } = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);

    //dispatch action
    const dispatch = useDispatch();

    //creating function to add product to cart, off the add item to cart context
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return(
        <div className="product-cards-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType={button_type_classes.inverted} onClick={addProductToCart}>Add To Cart</Button>
        </div>
    )
}

export default ProductCard;