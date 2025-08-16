import type { Meta, StoryObj } from "@storybook/react";
import ListExample from "./ListExample";

const meta: Meta<typeof ListExample> = {
  title: "List",
  component: ListExample,
};

export default meta;
type Story = StoryObj<typeof ListExample>;

export const Default: Story = {
  args: {
    items: ["First item", "Second item", "Third item"],
  },
};
