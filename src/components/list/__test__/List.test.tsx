import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioLight } from "../../../theme/portfolioThemes";
import List from "../List";

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);

describe("List component", () => {
  it("List should render list and svg colors correctly", () => {
    const items = ["First item", "Second item", "Third item"];
    renderWithPortfolioLight(<List items={items} />);
    const list = screen.getByTestId("list");
    expect(list).toBeInTheDocument();

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    const { getAllByRole } = within(list);
    const listItems = getAllByRole("listitem");

    listItems.forEach((li) => {
      const style = window.getComputedStyle(li);
      expect(style.listStyleImage).toContain("data:image/svg+xml");
      expect(style.listStyleImage).toContain(
        encodeURIComponent(portfolioLight.colors.accent),
      );
      expect(style.listStyleImage).toContain(
        encodeURIComponent(portfolioLight.colors.border),
      );
    });
  });
});
