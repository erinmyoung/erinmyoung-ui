import type { Meta, StoryObj } from "@storybook/react";
import SectionTitleExample from "./SectionTitleExample";

const meta: Meta<typeof SectionTitleExample> = {
  title: "Section Title",
  component: SectionTitleExample,
};

export default meta;
type Story = StoryObj<typeof SectionTitleExample>;

export const Primary: Story = {
  args: {
    text: "Section Title",
    size: "small",
    $fillBgColor: true,
  },
};
export const Secondary: Story = {
  args: {
    text: "Section Title",
    size: "small",
    $fillBgColor: false,
  },
};
