import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    user: userReducer,
});

// Persistence configuration
const persistConfig = {
    key: "root", // Name of Key in the local storage for the root reducer
    storage, // Storage to use
    version: 1,
    // whitelist: ["user"],   // List of keys to save in persisted state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store
export const store = configureStore({
    // reducer: { user: userReducer },
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required by Redux Toolkit to support object serialization (such as persisting state)
        }),
});

export const persistor = persistStore(store);
