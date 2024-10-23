// src/ThemedComponent.js
import React from "react";
import { Provider, Button, View } from "@adobe/react-spectrum";
import { customLightTheme, customDarkTheme } from "../customThemes";

const ThemedComponent = () => {
  console.log("customLightTheme", customLightTheme);
  return (
    <Provider theme={customLightTheme}>
      <View padding="size-200">
        <Button variant="cta" onPress={() => alert("Light button pressed!")}>
          Light Theme Button
        </Button>
        <Provider theme={customDarkTheme}>
          <Button variant="cta" onPress={() => alert("Dark button pressed!")}>
            Dark Theme Button
          </Button>
        </Provider>
      </View>
    </Provider>
  );
};

export default ThemedComponent;
