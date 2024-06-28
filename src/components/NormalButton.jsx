import React from "react";

const NormalButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default NormalButton;
