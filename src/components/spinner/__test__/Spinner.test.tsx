import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioDark, portfolioLight } from "../../../theme/portfolioThemes";
import Spinner from "../Spinner";

const spinnerSize = {
  small: "96px",
  medium: "128px",
  large: "160px",
};

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);
const renderWithPortfolioDark = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioDark}>{ui}</ThemeProvider>);

describe("Spinner component", () => {
  it("Spinner should render portfolioLight correctly", () => {
    renderWithPortfolioLight(<Spinner size="small" />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle(
      `border-bottom: 4px solid ${portfolioLight.colors.border}`,
    );
  });

  it("Spinner should render portfolioDark correctly", () => {
    renderWithPortfolioDark(<Spinner size="small" />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle(
      `border-bottom: 4px solid ${portfolioDark.colors.border}`,
    );
  });

  it("Spinner should render small size correctly", () => {
    renderWithPortfolioLight(<Spinner size="small" />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle(`height: ${spinnerSize["small"]}`);
    expect(spinner).toHaveStyle(`width: ${spinnerSize["small"]}`);
  });

  it("Spinner should render medium size correctly", () => {
    renderWithPortfolioLight(<Spinner size="medium" />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle(`height: ${spinnerSize["medium"]}`);
    expect(spinner).toHaveStyle(`width: ${spinnerSize["medium"]}`);
  });
});
