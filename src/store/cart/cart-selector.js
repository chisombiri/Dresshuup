import { createSelector } from 'reselect';
//generate new cart total and new cart count
//dispatch new actions cart items with appropriate payload

const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
