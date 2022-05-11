//context for toggling card dropdown
import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer";

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

//case statements for reducer
const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

//Initial state object for reducer
const INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
    cartCount: 0,
    cartTotal: 0,
};

//Reducer function for setting cart items and is cart open
const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};


export const CartProvider = ({children}) => {
    const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        //generate new cart total and new cart count
        //dispatch new actions cart items with appropriate payload

        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { 
                cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal }
            )
        );
    };

    //adding item to cart
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    //removing item from cart
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };

    //completely clear item from cart
    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems, productToClear);
        updateCartItemsReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch( createAction( CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};