import type { SharedSizes } from "./shared";

export interface Theme extends SharedSizes {
  colors: {
    background: string;
    text: string;
    accent: string;
    border: string;
    shadow: string;
  };
  title: {
    lines: string;
  };
  scroll: {
    circle: string;
    motionCircle: string;
  };
  background: {
    circlePrimary: string;
    circleSecondary: string;
    circleTertiary: string;
    lines: string;
    rectLarge: string;
    rectSmall: string;
  };
  mode: "light" | "dark";
}
