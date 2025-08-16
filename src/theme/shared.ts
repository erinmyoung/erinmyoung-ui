export const sharedSizes = {
  small: {
    backgroundWidth: "320",
    backgroundHeight: "330",
    containerPadding: "8px 0 28px 20px",
    titlePadding: "8px",
    titleSize: "32px",
    titleSizeMobile: "26px",
    linesWidth: "318",
    linesHeight: "82",
    spinner: "96px",
    icon: "28px",
    button: "18px",
  },
  medium: {
    backgroundWidth: "360",
    backgroundHeight: "372",
    containerPadding: "12px 0 28px 12px",
    titlePadding: "16px",
    titleSize: "40px",
    titleSizeMobile: "32px",
    linesWidth: "342",
    linesHeight: "88",
    spinner: "128px",
    icon: "40px",
    button: "22px",
  },
  large: {
    backgroundWidth: "400",
    backgroundHeight: "413",
    containerPadding: "16px 0 28px 12px",
    titlePadding: "28px",
    titleSize: "50px",
    titleSizeMobile: "40px",
    linesWidth: "364",
    linesHeight: "94",
    spinner: "160px",
    icon: "86px",
    button: "30px",
  },
} as const;

// Shared types are inferred automatically from values
export type SharedSizes = typeof sharedSizes;
