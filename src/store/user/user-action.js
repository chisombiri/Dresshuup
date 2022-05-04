import { createAction } from "../../utils/reducer/reducer";
import { USER_ACTION_TYPES } from "./user-action-types";


export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};