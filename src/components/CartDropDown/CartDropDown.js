import { useCallback } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../contexts/cart-context";

import { selectCartItems } from "../../store/cart/cart-selector";

import Button from "../Button/Button";
import CartItem from "../Cart-Item/Cart-Item";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropDown-Styles.js";

const CartDropDown = () => {
  //pulling off cart items from the context
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();
  //Navigate function to checkout
  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
