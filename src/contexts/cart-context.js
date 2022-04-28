//context for toggling card dropdown
import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]); //intial state for cart items
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    //re-calculate cart count anytime the cart items change
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    //calculate cart total price
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]); //dependency array is cart items

    //adding item to cart
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    //removing item from cart
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    //completely clear item from cart
    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear));
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};