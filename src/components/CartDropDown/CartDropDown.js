import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import Button from "../Button/Button";
import CartItem from "../Cart-Item/Cart-Item";
import "./CartDropDown.scss";

const CartDropDown = () => {
    //pulling off cart items from the context
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();
    //Navigate function to checkout
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items"> 
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={goToCheckoutHandler} >Go To Checkout</Button>
        </div>
    )
}

export default CartDropDown