import type { Meta, StoryObj } from "@storybook/react";
import ScrollProgressExample from "./ScrollProgressExample";

const meta: Meta<typeof ScrollProgressExample> = {
  title: "Scroll Progress",
  component: ScrollProgressExample,
};

export default meta;
type Story = StoryObj<typeof ScrollProgressExample>;

export const Default: Story = {
  args: {
    $right: "2rem",
    $bottom: "2rem",
    size: 80,
  },
};
