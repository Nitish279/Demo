// src/App.js
import React, { useState } from "react";
import {
  defaultTheme,
  Provider,
  Heading,
  View,
  Divider,
  RadioGroup,
  Radio,
} from "@adobe/react-spectrum";
import { customTheme } from "./customThemes";
import "./spectrum-custom.css";

function App() {
  const themes = [
    { id: 1, theme: defaultTheme, name: "Default" },
    { id: 2, theme: customTheme, name: "Custom" },
  ];
  const [theme, setTheme] = useState(1);
  const actualTheme = themes.find((l) => l.id === theme).theme;

  return (
    <Provider theme={actualTheme} height="100%">
      <View padding="size-200">
        <RadioGroup label="Theme" value={theme} onChange={setTheme}>
          {themes.map((theme) => (
            <Radio key={theme.id} value={theme.id}>
              {theme.name}
            </Radio>
          ))}
        </RadioGroup>
        <Divider />
        <Heading level={1}>This is a h1 heading</Heading>
        <View
          UNSAFE_className="spectrum-custom"
          padding="size-200"
          backgroundColor="blue-400"
          color="red-400"
        >
          This is some size-200 text, in a blue-400 container
        </View>
      </View>
    </Provider>
  );
}

export default App;
