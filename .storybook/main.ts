import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/__docs__/*.stories.tsx", "../src/**/__docs__/*.mdx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../static"],
};
export default config;
