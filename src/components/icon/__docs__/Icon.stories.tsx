import type { Meta, StoryObj } from "@storybook/react";
import IconExample from "./IconExample";

const meta: Meta<typeof IconExample> = {
  title: "Icon",
  component: IconExample,
};

export default meta;
type Story = StoryObj<typeof IconExample>;

export const Default: Story = {
  args: {
    src: "./static/assets/github.png",
    alt: "Github icon",
    $selectevents: false,
    size: "small",
  },
};
