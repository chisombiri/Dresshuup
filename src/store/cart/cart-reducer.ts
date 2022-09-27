import { AnyAction } from "redux";

import { setCartItems, setIsCartOpen } from "./cart-action";

import { CartItem } from "./cart-action-types";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

//Initial state object for reducer
export const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

//Reducer function for setting cart items and is cart open
export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
