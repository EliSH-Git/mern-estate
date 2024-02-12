import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";

export const store = configureStore({
    reducer: { user: userReducer },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required by Redux Toolkit to support object serialization (such as persisting state)
        }),
});
