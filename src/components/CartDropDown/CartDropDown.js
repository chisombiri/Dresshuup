import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import Button from "../Button/Button";
import CartItem from "../Cart-Item/Cart-Item";
import "./CartDropDown.scss";

const CartDropDown = () => {
    //pulling off cart items from the context
    const { cartItems } = useContext(CartContext);

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items"> 
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button>Go To Checkout</Button>
        </div>
    )
}

export default CartDropDown