import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ExitExample from "./ExitExample";

const meta: Meta<typeof ExitExample> = {
  title: "Exit",
  component: ExitExample,
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ExitExample>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
