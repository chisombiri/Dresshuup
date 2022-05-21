// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart-context";

import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart-selector"
import { clearItemFromCart, removeItemFromCart, addItemToCart } from "../../store/cart/cart-action"
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    //event handlers
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="quantity-value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;