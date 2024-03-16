import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/img/logo.jpg";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
export default AppLayout;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
