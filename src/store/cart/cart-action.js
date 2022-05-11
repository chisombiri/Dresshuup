import { CART_ACTION_TYPES } from "./cart-action-types";
import { createAction } from "../../utils/reducer/reducer";

//function to help find any cart items that match id of product in existing array and add
const addCartItem = (cartItems, productToAdd) => {
    //find if cart items containe product to be added
    const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    //if found, increase quantity, else add new cart item
    if(exisitingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    //return new array with modified cart items or new cart idem added to the array
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//function to help remove cart item
const removeCartItem = (cartItems, productToRemove) => {
    //find cart item to remove(item that exist)
    const exisitingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    //check if product item = 1, if so remove that product from cart
    if(exisitingCartItem.quantity === 1) {
        //reverse filter method
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    //else return back cart item with matching cart item and reduced quantity
    return cartItems.map((cartItem) => 
            cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );

};

//function to help clear cart item completely
const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
}

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

//adding item to cart
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

//removing item from cart
export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

//completely clear item from cart
export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};