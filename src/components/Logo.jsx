import React from "react";
import logo from "./logo.jpg"; // Make sure you have the logo file

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="London Stock Exchange Logo" />
      <span>SHIPIT</span>
    </div>
  );
};

export default Logo;
