import { CART_ACTION_TYPES } from "./cart-action-types";
import { createAction } from "../../utils/reducer/reducer";

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);