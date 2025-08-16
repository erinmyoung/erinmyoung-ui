import type { Preview } from "@storybook/react-vite";
import { GlobalStyles } from "../src/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { portfolioLight, portfolioDark } from "../src/theme/portfolioThemes";
import { storeLight, storeDark } from "../src/theme/storeThemes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  globalTypes: {
    brand: {
      name: "Brand",
      description: "Brand theme",
      defaultValue: "portfolio",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "portfolio", title: "Portfolio Theme" },
          { value: "store", title: "Store Theme" },
        ],
        dynamicTitle: true,
      },
    },
    mode: {
      name: "Mode",
      description: "Light or Dark",
      defaultValue: "light",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light Mode" },
          { value: "dark", title: "Dark Mode" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { brand, mode } = context.globals;

      const themeMap = {
        portfolio: { light: portfolioLight, dark: portfolioDark },
        store: { light: storeLight, dark: storeDark },
      };
      const theme = themeMap[brand][mode];

      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
