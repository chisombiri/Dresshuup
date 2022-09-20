//redux store
import { Middleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";

//importing reducer and store methods from redux persist
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

//root reducer: combination of all reducers
import { rootReducer } from "./root-reducer";

//saga replace thunk
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  // blacklist: ['user'] //user won't be persisted to avoid conflict with authentication
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //ensure logger only runs in development and filter out if false
  middleware: [
    process.env.NODE_ENV !== "production" && logger,
    sagaMiddleware,
  ].filter((middleware): middleware is Middleware => Boolean(middleware)),
});

sagaMiddleware.run(rootSaga);

//persisting data to local storage export
export const persistor = persistStore(store);
