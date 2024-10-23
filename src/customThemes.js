// src/customThemes.js
import { theme as defaultTheme } from "@react-spectrum/theme-default";

const customTheme = {
  ...defaultTheme,
  global: {
    ...defaultTheme.global,
    palette: {
      ...defaultTheme.global.palette,
      "blue-400": "#FF6347", // Custom color for blue-400
      "red-400": "#1E90FF", // Custom color for red-400
    },
  },
};

export { customTheme };
