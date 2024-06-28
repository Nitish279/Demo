import React, { useState } from "react";
import {
  Provider,
  defaultTheme,
  lightTheme,
  darkTheme,
  Button,
  Flex,
} from "@adobe/react-spectrum";

// import NormalButton from "./components/NormalButton";
// import AriaButton from "./components/AriaButton";
// import SpectrumButton from "./components/SpectrumButton";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  // const handleClick = () => {
  //   alert("Button clicked!");
  // };

  return (
    <div className="app">
      {/* <h1>Button Comparison</h1>
      <h2>Normal Button</h2>
      <NormalButton onClick={handleClick}>Click Me</NormalButton>
      <h2>ARIA Button</h2>
      <AriaButton onClick={handleClick}>Click Me</AriaButton>
      <h2>Spectrum Button</h2> */}
      <Provider theme={lightTheme}>
        {/* <SpectrumButton onClick={handleClick}>Click Me</SpectrumButton> */}
        <Header />
        <Flex justifyContent="center" marginY="size-200">
          <Button variant="primary" onPress={toggleTheme}>
            Toggle Theme
          </Button>
        </Flex>
        <Main />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
