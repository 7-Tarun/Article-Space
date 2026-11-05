import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer
        //Todo: Add more reducers here for Posts.
    }
});

export default store