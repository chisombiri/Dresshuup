import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase";

//default value is passed to create context
//actual value to be accessed 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_ USER'
}

//reducer function
const userReducer = (state, action) => {
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
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

//initiate current user as null
const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    //initialize value as null with useState
    // const [currentUser, setCurrentUser] = useState(null);

    //initialize value as null with useReducer
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    // console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    }

    //passing in setter function and value
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}