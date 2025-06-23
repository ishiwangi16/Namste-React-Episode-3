import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [btnNameReact,setBtnNameReact]=useState("Login");

  return (
    <div className="header">
      <div className="logo-Container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact==="Login" 
              ?setBtnNameReact("Logout")
              :setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
