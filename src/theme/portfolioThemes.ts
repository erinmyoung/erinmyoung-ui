import type { Theme } from "./types";
import { sharedSizes } from "./shared";

export const portfolioLight: Theme = {
  ...sharedSizes,
  colors: {
    background: "#ffffff",
    text: "#213547",
    accent: "#f4fdfb",
    border: "#b1cfc7",
    shadow: "#b1cfc7",
  },
  title: {
    lines: "#b1cfc7",
  },
  scroll: {
    circle: "#b1cfc7",
    motionCircle: "#3f8372ff",
  },
  background: {
    circlePrimary: "#B1CFC7",
    circleSecondary: "#FFF5E9",
    circleTertiary: "#F5FDFB",
    lines: "#B1CFC7",
    rectLarge: "#EDF3F1",
    rectSmall: "#F5F5F5",
  },
  mode: "light",
};

export const portfolioDark: Theme = {
  ...sharedSizes,
  colors: {
    background: "#0E0025",
    text: "#ffffff",
    accent: "#450019",
    border: "#ffb3cc",
    shadow: "#ffb3cc",
  },
  title: {
    lines: "#8A4374",
  },
  scroll: {
    circle: "#ffb3cc",
    motionCircle: "#973678ff",
  },
  background: {
    circlePrimary: "#55001F",
    circleSecondary: "#402D4F",
    circleTertiary: "#653956",
    lines: "#653956",
    rectLarge: "#26222C",
    rectSmall: "#55001F",
  },
  mode: "dark",
};

export type AppTheme = typeof portfolioLight;
