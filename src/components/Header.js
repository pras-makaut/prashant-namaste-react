import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logIn, setLogIn] = useState(true);
  const { user } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between bg-pink-50">
      <div className="logoContainer">
        <img
          data-testid="logo"
          className="h-28 p-2 w-auto"
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart" data-testid="cart">
              Cart {cartItems.length} items
            </Link>
          </li>
        </ul>
      </div>
      {user.name}
      {logIn === true ? (
        <button className="px-6" onClick={() => setLogIn(false)}>
          <Link to="/login">Login</Link>{" "}
        </button>
      ) : (
        <button className="px-6" onClick={() => setLogIn(true)}>
          LogOut{" "}
        </button>
      )}
    </div>
  );
};

export default Header;
