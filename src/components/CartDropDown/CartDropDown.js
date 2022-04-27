import Button from "../Button/Button";
import "./CartDropDown.scss";

const CartDropDown = () => {
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button>Go To Checkout</Button>
        </div>
    )
}

export default CartDropDown