import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioDark, portfolioLight } from "../../../theme/portfolioThemes";
import ImageWithBackground from "../ImageWithBackground";

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);
const renderWithPortfolioDark = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioDark}>{ui}</ThemeProvider>);

// Mock image for testing
const mockImageSrc = "https://example.com/test-image.png";
const mockAltText = "Test image";

describe("Image with background component", () => {
  it("Image with background should render portfolioLight correctly", () => {
    renderWithPortfolioLight(
      <ImageWithBackground src={mockImageSrc} alt={mockAltText} size="small" />,
    );
    const wrapper = screen.getByTestId("image-background-wrapper");
    expect(wrapper).toBeInTheDocument();

    const image = screen.getByTestId("foreground-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(
      `width: calc(${portfolioDark["small"].backgroundWidth}px * 0.8)`,
    );
    expect(image).toHaveAttribute("src", mockImageSrc);
    expect(image).toHaveAttribute("alt", mockAltText);

    const lines = screen.getByTestId("background-lines");
    expect(lines).toBeInTheDocument();
    expect(lines).toHaveAttribute(
      "width",
      portfolioLight["small"].backgroundWidth,
    );
    expect(lines).toHaveAttribute("viewBox", "0 0 400 413");

    const rect = screen.getByTestId("background-lines-rect");
    expect(rect).toBeInTheDocument();
    expect(rect).toHaveAttribute("fill", portfolioLight.background.rectLarge);
  });

  it("Image with background should render portfolioDark correctly", () => {
    renderWithPortfolioDark(
      <ImageWithBackground src={mockImageSrc} alt={mockAltText} size="large" />,
    );
    const wrapper = screen.getByTestId("image-background-wrapper");
    expect(wrapper).toBeInTheDocument();

    const image = screen.getByTestId("foreground-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle(
      `width: calc(${portfolioDark["large"].backgroundWidth}px * 0.8)`,
    );

    const lines = screen.getByTestId("background-lines");
    expect(lines).toBeInTheDocument();
    expect(lines).toHaveAttribute(
      "width",
      portfolioDark["large"].backgroundWidth,
    );
    expect(lines).toHaveAttribute("viewBox", "0 0 400 413");

    const rect = screen.getByTestId("background-lines-rect");
    expect(rect).toBeInTheDocument();
    expect(rect).toHaveAttribute("fill", portfolioDark.background.rectLarge);
  });
});
