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

}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
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
    };

    //removing item from cart
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};