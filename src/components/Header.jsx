import logo from "../img/logo.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header rendered");

  //If no dependency array => useEffect is called on every render cycle.
  //If dependency array is empty = [] => useEffect is called on initial render(just once).
  //If dependency array is [btnNameReact], then useEffect is called everytime [btnNameReact] is updated.
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
      </div>
      <div className="navbar-container">
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
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
