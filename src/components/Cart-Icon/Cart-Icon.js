import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart-selector';

import { setIsCartOpen } from '../../store/cart/cart-action';

import {CartIconContainer, ShoppingIcon, ItemCout} from "./Cart-Icon-Styles.js";

const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    //logical function to set cart open to opposite value, creating toggle on cart
    //dispatch action creator setIsCartOpen
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCout>{cartCount}</ItemCout>
        </CartIconContainer>
    )
}

export default CartIcon;