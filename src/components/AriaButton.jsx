import React from "react";
import { useButton } from "@react-aria/button";
import { useRef } from "react";

const AriaButton = ({ onClick, children }) => {
  let ref = useRef();
  let { buttonProps } = useButton({ onPress: onClick }, ref);

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
};

export default AriaButton;
