import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/magicdecor-logo.jpg";

// App structure*******************************

// 1.Headers
// a) Logo
// b) NavBar

// 2.Body
// a) Search Bar
// b) Resto Container
// c) Resto Cards

// 3.Footer
// a) Copyright
// b) Links
// c) Address
// d) contacts

// **********************************************

const Header = () => {
  return (
    <div classname="header">
      <div classname="logo-container">
        <img classname="logo" src={logo} />
      </div>
      <div classname="navbar-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Body = () => {};
const Footer = () => {};
const AppLayout = () => {
  return (
    <div classname="app">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
