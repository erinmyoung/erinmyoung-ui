import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioDark, portfolioLight } from "../../../theme/portfolioThemes";
import Button from "../Button";

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);
const renderWithPortfolioDark = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioDark}>{ui}</ThemeProvider>);

describe("Button component", () => {
  it("Button should render portfolioLight and small size correctly", () => {
    renderWithPortfolioLight(
      <Button text="My portfolioLight button" size="small" />,
    );
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText("My portfolioLight button")).toBeInTheDocument();
    expect(button).toHaveStyle(
      `background-color: ${portfolioLight.colors.accent}`,
    );
    expect(button).toHaveStyle(`font-size: ${portfolioLight["small"].button}`);
    expect(button).toHaveStyle("cursor: pointer");
  });

  it("Button should render portfolioDark and large size correctly", () => {
    renderWithPortfolioDark(
      <Button text="My portfolioDark button" size="large" />,
    );
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText("My portfolioDark button")).toBeInTheDocument();
    expect(button).toHaveStyle(
      `background-color: ${portfolioDark.colors.accent}`,
    );
    expect(button).toHaveStyle(`font-size: ${portfolioLight["large"].button}`);
    expect(button).toHaveStyle("cursor: pointer");
  });

  it("Button should render disabled correctly", () => {
    renderWithPortfolioLight(
      <Button text="My disabled button" size="large" disabled />,
    );
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText("My disabled button")).toBeInTheDocument();
    expect(button).toHaveStyle("cursor: not-allowed");
  });
});
