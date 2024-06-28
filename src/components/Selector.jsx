import React from "react";
import { Picker, Item } from "@adobe/react-spectrum";

const Selector = ({ label }) => {
  return (
    <Picker label={label}>
      <Item key="option1">Option 1</Item>
      <Item key="option2">Option 2</Item>
      <Item key="option3">Option 3</Item>
    </Picker>
  );
};

export default Selector;
