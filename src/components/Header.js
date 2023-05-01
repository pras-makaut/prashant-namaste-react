import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [logIn, setLogIn] = useState(true);
  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50">
      <div className="logoContainer">
        <img className="h-28 p-2 w-auto" src={LOGO_URL} alt="" />
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
          <li className="px-2">Cart</li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
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
