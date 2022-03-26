import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <p className="logo-title">
        Jewelery Empire <img className="logo" src={logo} alt="" />
      </p>{" "}
      <div>
        <a href="/shop">Shop</a>
        <a href="/orders">Cart</a>
        <a href="/inventory">Contact</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
