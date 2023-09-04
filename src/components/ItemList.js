import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    //console.log("items are ", items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    };
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="m-2 p-2 border-gray-300 border-b-2 text-left"
                >
                    <div className="flex justify-between my-4">
                        <div className="flex flex-col py-2 text-lg">
                            <span>{item.card.info.name}</span>
                            <span> ₹{item.card.info.price / 100}</span>
                        </div>
                        <div className="w-40">
                            <button
                                onClick={() => handleAddItem(item)}
                                className="p-2 bg-black text-white shadow-lg absolute mx-16 rounded-lg"
                            >
                                Add +
                            </button>
                            <img src={CDN_URL + item.card.info.imageId} alt="" />
                        </div>
                    </div>

                    <p className="text-xs">{item.card.info.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
