import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    let btnName = "login";
    const [buttonName, setButtonName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    //cart related info
    const cartItems = useSelector((store) => store.cart.items);

    console.log("cartItems are ", cartItems);

    useEffect(() => {
        console.log("useEffect is called");
    }, [buttonName]);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-100">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online status: {onlineStatus ? "🟢" : "offline"}</li>
                    <li className="px-4">
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about"> About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact"> Contact us</Link>
                    </li>

                    <li className="px-4 text-lg font-bold">
                        <Link to="/cart"> Cart ({cartItems.length} Items)</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/grocery"> Grocery</Link>
                    </li>

                    <button
                        className="px-4"
                        onClick={() => {
                            buttonName === "Login"
                                ? setButtonName("Logout")
                                : setButtonName("Login");
                        }}
                    >
                        {buttonName}
                    </button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
