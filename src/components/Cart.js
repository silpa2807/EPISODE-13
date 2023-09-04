import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    // const cartItems = useSelector((store) => store.cart.items);
    // instead of doing like this we can also do, but the below code is insufficient
    //because we are subscribing to the whole store we only want access to cartSlice of the store in this place

    // const store = useSelector((store)=>store);
    // const cartItems = store.cart.items;

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="text-center m-10 p-10 font-bold">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button
                    onClick={() => handleClearCart()}
                    className="p-2 m-2 text-white bg-black rounded-lg"
                >
                    Clear Cart
                </button>
                <ItemList items={cartItems} />
                {cartItems.length === 0 && <p>Cart is Empty. Please add more items</p>}
            </div>
        </div>
    );
};

export default Cart;
