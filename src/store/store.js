//redux store

import { configureStore } from "@reduxjs/toolkit"
import  { logger } from "redux-logger";

//root reducer: combination of all reducers
import { rootReducer } from "./root-reducer";

export const store = configureStore({
    reducer: rootReducer, 
    middleware: [logger]
});

