import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                loading: false,
            };
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        //     state.action = action.payload; // payload is the data we receive from the server
        //     state.loading = false;
        //     state.error = null;
        // },
        // setCurrentUser: (state, action) => {
        //     state.currentUser = action.payload;
        // },
        // setError: (state, action) => {
        //     state.error = action.payload;
        // },
        // setLoading: (state, action) => {
        //     state.loading = action.payload;
        // },
    },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
// export const setCurrentUser = userSlice.actions.setCurrentUser;
// export const setError = userSlice.actions.setError;
// export const setLoading = userSlice.actions.setLoading;

export default userSlice.reducer;
