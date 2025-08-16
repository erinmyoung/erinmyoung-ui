import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ButtonExample from "./ButtonExample";

const meta: Meta<typeof ButtonExample> = {
  title: "Button",
  component: ButtonExample,
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ButtonExample>;

export const Default: Story = {
  args: {
    text: "Button",
    label: "Click to do something",
    size: "small",
    disabled: false,
  },
};
