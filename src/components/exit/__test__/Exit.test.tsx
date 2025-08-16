import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioDark, portfolioLight } from "../../../theme/portfolioThemes";
import Exit from "../Exit";

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);
const renderWithPortfolioDark = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioDark}>{ui}</ThemeProvider>);

describe("Exit component", () => {
  it("Exit should render portfolioLight correctly", () => {
    renderWithPortfolioLight(<Exit />);
    const exit = screen.getByTestId("exit");
    expect(exit).toBeInTheDocument();
    expect(exit).toHaveStyle(
      `background-color: ${portfolioLight.colors.accent}`,
    );
    expect(exit).toHaveStyle("cursor: pointer");
  });

  it("Exit should render portfolioDark correctly", () => {
    renderWithPortfolioDark(<Exit />);
    const exit = screen.getByTestId("exit");
    expect(exit).toBeInTheDocument();
    expect(exit).toHaveStyle(
      `background-color: ${portfolioDark.colors.accent}`,
    );
    expect(exit).toHaveStyle("cursor: pointer");
  });

  it("Exit should render disabled correctly", () => {
    renderWithPortfolioLight(<Exit disabled />);
    const exit = screen.getByTestId("exit");
    expect(exit).toBeInTheDocument();
    expect(exit).toHaveStyle("cursor: not-allowed");
  });
});
