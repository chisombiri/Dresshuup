//redux store

import { configureStore } from "@reduxjs/toolkit"
import  { logger } from "redux-logger";

//importing reducer and store methods from redux persist
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

//root reducer: combination of all reducers
import { rootReducer } from "./root-reducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'] //user won't be persisted to avoid conflict with authentication
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore(
    {
    reducer: persistedReducer, 
    middleware: [logger]
    }
);

export const persistor = persistStore(store);
