import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ArrowExample from "./ArrowExample";

const meta: Meta<typeof ArrowExample> = {
  title: "Arrow",
  component: ArrowExample,
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ArrowExample>;

export const Right: Story = {
  args: {
    $orientation: "right",
    disabled: false,
  },
};
export const Left: Story = {
  args: {
    $orientation: "left",
    disabled: false,
  },
};
