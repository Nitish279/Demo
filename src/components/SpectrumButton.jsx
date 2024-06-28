import React from "react";
import { Button } from "@react-spectrum/button";

const SpectrumButton = ({ onClick, children }) => {
  return <Button onPress={onClick}>{children}</Button>;
};

export default SpectrumButton;
