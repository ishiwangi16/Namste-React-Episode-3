import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {

  const [btnNameReact,setBtnNameReact]=useState("Login");

  return (
    <div className="header">
      <div className="logo-Container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/home">Home</Link>
           </li>
          <li>
           <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us
            </Link>
            </li>
          <li>
            Cart</li>
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
