import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioDark, portfolioLight } from "../../../theme/portfolioThemes";
import Arrow from "../Arrow";

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);
const renderWithPortfolioDark = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioDark}>{ui}</ThemeProvider>);

describe("Arrow component", () => {
  it("Arrow should render portfolioLight correctly", () => {
    renderWithPortfolioLight(<Arrow $orientation="right" />);
    const arrow = screen.getByTestId("arrow");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveStyle(
      `background-color: ${portfolioLight.colors.accent}`,
    );
    expect(arrow).toHaveStyle("cursor: pointer");
  });

  it("Arrow should render portfolioDark correctly", () => {
    renderWithPortfolioDark(<Arrow $orientation="right" />);
    const arrow = screen.getByTestId("arrow");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveStyle(
      `background-color: ${portfolioDark.colors.accent}`,
    );
    expect(arrow).toHaveStyle("cursor: pointer");
  });

  it("Arrow should render disabled correctly", () => {
    renderWithPortfolioLight(<Arrow $orientation="right" disabled />);
    const arrow = screen.getByTestId("arrow");
    expect(arrow).toBeInTheDocument();
    expect(arrow).toHaveStyle("cursor: not-allowed");
  });
});
