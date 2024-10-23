import React from "react";
import { Button } from "@adobe/react-spectrum";

const NormalButton = ({ label, onPress }) => {
  return (
    <Button
      variant="primary"
      onPress={onPress}
      UNSAFE_className="normal-button"
    >
      {label}
    </Button>
  );
};

export default NormalButton;
