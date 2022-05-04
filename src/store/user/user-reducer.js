import { USER_ACTION_TYPES } from "./user-action-types";

//initiate current user as null
const INITIAL_STATE = {
    currentUser: null
};

//reducer function
export const userReducer = (state = INITIAL_STATE, action) => {
    // console.log('dispatched');
    // console.log(action);
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
};
