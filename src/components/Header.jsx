import React from "react";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
// import { Flex } from "@adobe/react-spectrum";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <UserMenu />
    </header>
  );
};

export default Header;
