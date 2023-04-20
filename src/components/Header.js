import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [logIn, setLogIn] = useState(true);
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {logIn === true ? (
        <button onClick={() => setLogIn(false)}>
          <Link to="/login">Login</Link>{" "}
        </button>
      ) : (
        <button onClick={() => setLogIn(true)}>LogOut </button>
      )}
    </div>
  );
};

export default Header;
