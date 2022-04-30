import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import {CartIconContainer, ShoppingIcon, ItemCout} from "./Cart-Icon-Styles.js";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    //logical function to set cart open to opposite value, creating toggle on cart
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCout>{cartCount}</ItemCout>
        </CartIconContainer>
    )
}

export default CartIcon