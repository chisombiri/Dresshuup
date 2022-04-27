import { useContext } from "react";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart-context";
import "./Cart-Icon.scss";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    //logical function to set cart open to opposite value, creating toggle on cart
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon