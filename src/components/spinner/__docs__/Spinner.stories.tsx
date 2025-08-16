import type { Meta, StoryObj } from "@storybook/react";
import SpinnerExample from "./SpinnerExample";

const meta: Meta<typeof SpinnerExample> = {
  title: "Spinner",
  component: SpinnerExample,
};

export default meta;
type Story = StoryObj<typeof SpinnerExample>;

export const Default: Story = {
  args: {
    size: "small",
  },
};
