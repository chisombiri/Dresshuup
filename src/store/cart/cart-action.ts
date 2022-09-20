import { CategoryItem } from "../categories/category-action-types";
import { CART_ACTION_TYPES, CartItem } from "./cart-action-types";
import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer";

//function to help find any cart items that match id of product in existing array and add
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  //find if cart items contain product to be added
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increase quantity, else add new cart item
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cart items or new cart idem added to the array
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//function to help remove cart item
const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  //find cart item to remove(item that exist)
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  //check if product item = 1, if so remove that product from cart
  if (existingCartItem && existingCartItem.quantity === 1) {
    //reverse filter method
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  //else return back cart item with matching cart item and reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

//function to help clear cart item completely
const clearCartItem = (
  cartItems: CartItem[],
  productToClear: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

//adding item to cart
export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

//removing item from cart
export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

//completely clear item from cart
export const clearItemFromCart = (
  cartItems: CartItem[],
  productToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return setCartItems(newCartItems);
};
