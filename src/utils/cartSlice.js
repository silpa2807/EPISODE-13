import { createSlice, current } from "@reduxjs/toolkit";
//here name, initialState and reducers are configurations of cartSlice
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //here we dont need any action
            console.log("state is ", current(state));
            //state.items.length = 0;

            //other ways to write
            return { items: [] }; //this object will replace the original state
            console.log("state is ", current(state));
        },
    },
});

console.log("cartSlice is ", cartSlice);
//this is somewhat similar to the object that is returned by the cartSlice function from the above thing
// {
//     actions: {
//         addItem;
//     },
//     reducers {}
//}

//we will export reducers and actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
