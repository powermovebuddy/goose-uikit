import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#708090",
  primaryBright: "#708090",
  primaryDark: "#708090",
  secondary: "#0f66e9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#000000",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#0f66e9",
  textDisabled: "#BDC2C4",
  textSubtle: "#0f66e9",
  borderColor: "#0f66e9",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#0f66e9",
  background: "#000000",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  primaryDark: "#708090",
  tertiary: "#EFF4F5",
  text: "#0f66e9",
  textDisabled: "#BDC2C4",
  textSubtle: "#0f66e9",
  borderColor: "#0f66e9",
  card: "#000000",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
