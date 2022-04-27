import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./Cart-Icon.scss";

const CartIcon = () => {
    return(
        <div className="cart-icon-container">
            <ShoppingBag className="shopping-icon" />
            <span className="item-count">10</span>
        </div>
    )
}

export default CartIcon