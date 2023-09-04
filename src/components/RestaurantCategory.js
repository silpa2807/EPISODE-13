import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
    //removing this super power from restcategory and we are passing it from restmenu
    //and try to make it as a controlled component
    // const [showItems, setShowItems] = useState(false);
    
    
    
    //console.log("data is ", data);


    const handleClick = () => {
        //console.log("clicked");
        //setShowItems(!showItems);

        setShowItems();
    };
    return (
        <div>
            <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title}({data.itemCards.length})
                    </span>
                    <span className="cursor-pointer">⨈</span>
                </div>
                {/* now it becomes a controlled component */}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
