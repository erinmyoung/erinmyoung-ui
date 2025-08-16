import type { Meta, StoryObj } from "@storybook/react";
import ImageWithBackgroundExample from "./ImageWithBackgroundExample";

const meta: Meta<typeof ImageWithBackgroundExample> = {
  title: "Image With Background",
  component: ImageWithBackgroundExample,
};

export default meta;
type Story = StoryObj<typeof ImageWithBackgroundExample>;

export const Default: Story = {
  args: {
    src: "./static/assets/erin.webp",
    alt: "Erin Young Image",
    size: "small",
  },
};
