import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [logIn, setLogIn] = useState(true);
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {logIn === true ? (
        <button onClick={() => setLogIn(false)}>Login </button>
      ) : (
        <button onClick={() => setLogIn(true)}>LogOut </button>
      )}
    </div>
  );
};

export default Header;
