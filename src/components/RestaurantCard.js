import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
const RestaurantCard = (props) => {
    const { loggedInUser } = useContext(UserContext);
    const { resData } = props;

    const { name, cuisines, cloudinaryImageId, avgRating, costForTwo, deliveryTime } =
        resData?.data;
    return (
        <div className="m-4 p-4 w-[340px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>₹{costForTwo / 100} for two</h4>
            <h4>{deliveryTime} minutes</h4>
            <h5 className="font-bold">logged in user {loggedInUser}</h5>
        </div>
    );
};

//Higher Order component
//the props that are passed will be received in the returning functional component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
