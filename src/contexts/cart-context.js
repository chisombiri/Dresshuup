//context for toggling card dropdown
import { createContext, useEffect, useState } from "react";

//function to help find any cart items that match id of product in existing array
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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]); //intial state for cart items
    const [cartCount, setCartCount] = useState(0);

    //re-calculate cart count anytime the cart items change
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    //adding item to cart
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};