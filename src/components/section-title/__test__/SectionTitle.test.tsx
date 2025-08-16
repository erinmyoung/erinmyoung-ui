import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioDark, portfolioLight } from "../../../theme/portfolioThemes";
import SectionTitle from "../SectionTitle";

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);
const renderWithPortfolioDark = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioDark}>{ui}</ThemeProvider>);

describe("Section title component", () => {
  it("Section title should render portfolioLight correctly", () => {
    renderWithPortfolioLight(
      <SectionTitle
        text="Section Title portfolioLight"
        size="small"
        $fillBgColor={true}
      />,
    );
    expect(
      screen.getByText("Section Title portfolioLight"),
    ).toBeInTheDocument();

    const wrapper = screen.getByTestId("section-title-wrapper");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveStyle(
      `background-color: ${portfolioLight.colors.accent}`,
    );

    const title = screen.getByTestId("section-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle(`color: ${portfolioLight.colors.text}`);
  });

  it("Section title should render portfolioDark correctly", () => {
    renderWithPortfolioDark(
      <SectionTitle
        text="Section Title portfolioDark"
        size="small"
        $fillBgColor={true}
      />,
    );
    expect(screen.getByText("Section Title portfolioDark")).toBeInTheDocument();

    const wrapper = screen.getByTestId("section-title-wrapper");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveStyle(
      `background-color: ${portfolioDark.colors.accent}`,
    );

    const title = screen.getByTestId("section-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle(`color: ${portfolioDark.colors.text}`);
  });

  it("Section title should render small size correctly", () => {
    renderWithPortfolioLight(
      <SectionTitle
        text="Section Title small"
        size="small"
        $fillBgColor={false}
      />,
    );
    expect(screen.getByText("Section Title small")).toBeInTheDocument();

    const wrapper = screen.getByTestId("section-title-wrapper");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveStyle(
      `padding: ${portfolioLight["small"].containerPadding}`,
    );

    const lines = screen.getByTestId("section-title-lines");
    expect(lines).toBeInTheDocument();
    expect(lines).toHaveAttribute("viewBox", "0 0 950 220");
    expect(lines).toHaveAttribute("width", portfolioLight["small"].linesWidth);

    const title = screen.getByTestId("section-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle(
      `font-size: ${portfolioLight["small"].titleSize}`,
    );
  });

  it("Section title should render large size correctly", () => {
    renderWithPortfolioLight(
      <SectionTitle
        text="Section Title large"
        size="large"
        $fillBgColor={false}
      />,
    );
    expect(screen.getByText("Section Title large")).toBeInTheDocument();

    const wrapper = screen.getByTestId("section-title-wrapper");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveStyle(
      `padding: ${portfolioLight["large"].containerPadding}`,
    );

    const lines = screen.getByTestId("section-title-lines");
    expect(lines).toBeInTheDocument();
    expect(lines).toHaveAttribute("width", portfolioLight["large"].linesWidth);

    const title = screen.getByTestId("section-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle(
      `font-size: ${portfolioLight["large"].titleSize}`,
    );
  });
});
