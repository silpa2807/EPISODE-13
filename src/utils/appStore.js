import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
    reducer: {
        cart: cartReducer,

        //if we 
        // user: userReducer
    },
});

export default appStore;
