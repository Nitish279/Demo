import React from "react";
import { Button } from "@adobe/react-spectrum";
import "./UserMenu.css";

const UserMenu = () => {
  return (
    <div className="user-menu">
      <span>nitish.anand@acadia.inc</span>
      <Button variant="primary">Logout</Button>
    </div>
  );
};

export default UserMenu;
