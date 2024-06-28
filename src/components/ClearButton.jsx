import React from "react";
import { Button } from "@adobe/react-spectrum";
import "./ClearButton.css";

const ClearButton = () => {
  return (
    <Button className="clear-button" variant="cta">
      CLEAR DEFAULT SELECTIONS
    </Button>
  );
};

export default ClearButton;
