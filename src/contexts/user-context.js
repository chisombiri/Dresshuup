import { createContext, useState } from "react";

//default value is passed to create context
//actual value to be accessed 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    //initialize value as null
    const [currentUser, setCurrentUser] = useState(null);
    //passing in setter function and value
    const value = {currentUser, setCurrentUser};


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}