import { useEffect, useState } from "react";

const useRestaurantList = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.1446281&lng=76.22727139999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        //change this to 0 or 2 index

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };

    return {ListOfRestaurants, filteredRestaurants};
};

export default useRestaurantList;
