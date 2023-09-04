import React from "react";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    // const [showIndex, setShowIndex] = useState(0);
    const [showIndex, setShowIndex] = useState(null);
    const { resId } = useParams();

    //customHook
    const resInfo = useRestaurantMenu(resId);

    //resInfo is null so return shimmer ui
    if (resInfo === null) {
        return <ShimmerUI />;
    }

    //check the api response in the preview of network tab
    //card[0] has restaurant info
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    //cards[2] conatins all other info
    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //oth card is veg filter
    //1st cards is recommended

    //it will list down all cards that are present from which we can identy the grouped category
    //we can filter out categories from these cards
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    //console.log("categories are ", categories);

    const setShowItems = (index) => {
        if (showIndex === index) {
            setShowIndex(null);
        } else {
            setShowIndex(index);
        }
    };

    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} {costForTwoMessage}
            </p>
            {/* categories accordian*/}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    // showItems={index === 0 && true}
                    showItems={index === showIndex && true}
                    setShowItems={() => setShowItems(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
