import type { Theme } from "./types";
import { sharedSizes } from "./shared";

export const storeLight: Theme = {
  ...sharedSizes,
  colors: {
    background: "#ffffff",
    text: "#472129",
    accent: "#fdfaf4",
    border: "#fbd68b",
    shadow: "#fbd68b",
  },
  title: {
    lines: "#f5b536",
  },
  scroll: {
    circle: "#f5b536",
    motionCircle: "#c67e1f",
  },
  background: {
    circlePrimary: "#f5b536",
    circleSecondary: "#FFF5E9",
    circleTertiary: "#fbd68b",
    lines: "#f5b536",
    rectLarge: "#fdf4f4ff",
    rectSmall: "#f6a7acff",
  },
  mode: "light",
};

export const storeDark: Theme = {
  ...sharedSizes,
  colors: {
    background: "#000e45",
    text: "#ffffff",
    accent: "#1d2b61",
    border: "#8fc4f6",
    shadow: "#8fc4f6",
  },
  title: {
    lines: "#7185d5",
  },
  scroll: {
    circle: "#aad6ff",
    motionCircle: "#3f74df",
  },
  background: {
    circlePrimary: "#1b479fff",
    circleSecondary: "#204417ff",
    circleTertiary: "#024226ff",
    lines: "#7185d5",
    rectLarge: "#0f3559ff",
    rectSmall: "#26323eff",
  },
  mode: "dark",
};
