import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FFE6CC",
  primaryBright: "#FFE6CC",
  primaryDark: "#FFE6CC",
  secondary: "#FFE6CC",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#5f9ea0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#FFE6CC",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFE6CC",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FFE6CC",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#FFE6CC",
  tertiary: "#353547",
  text: "#add8e6",
  textDisabled: "#666171",
  textSubtle: "#add8e6",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
