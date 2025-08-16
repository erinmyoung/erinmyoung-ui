import "@testing-library/jest-dom";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioDark, portfolioLight } from "../../../theme/portfolioThemes";
import ScrollProgress from "../ScrollProgress";

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);
const renderWithPortfolioDark = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioDark}>{ui}</ThemeProvider>);

describe("Scroll progress component", () => {
  beforeEach(() => {
    // Reset scroll position
    vi.stubGlobal("scrollTo", vi.fn());
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  it("Scroll progress should render portfolioLight correctly", () => {
    const containerRef = {
      current: document.createElement("div"),
    } as React.RefObject<HTMLDivElement>;
    renderWithPortfolioLight(
      <ScrollProgress size={80} $container={containerRef} />,
    );
    const progress = screen.getByTestId("progress-button");
    expect(progress).toBeInTheDocument();

    const circle = screen.getByTestId("circle");
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveStyle(`stroke: ${portfolioLight.scroll.circle}`);

    const motionCircle = screen.getByTestId("motion-circle");
    expect(motionCircle).toBeInTheDocument();
    expect(motionCircle).toHaveStyle(
      `stroke: ${portfolioLight.scroll.motionCircle}`,
    );
  });

  it("Scroll progress should render portfolioDark correctly", () => {
    const containerRef = {
      current: document.createElement("div"),
    } as React.RefObject<HTMLDivElement>;
    renderWithPortfolioDark(
      <ScrollProgress size={80} $container={containerRef} />,
    );
    const progress = screen.getByTestId("progress-button");
    expect(progress).toBeInTheDocument();

    const circle = screen.getByTestId("circle");
    expect(circle).toBeInTheDocument();
    expect(circle).toHaveStyle(`stroke: ${portfolioDark.scroll.circle}`);

    const motionCircle = screen.getByTestId("motion-circle");
    expect(motionCircle).toBeInTheDocument();
    expect(motionCircle).toHaveStyle(
      `stroke: ${portfolioDark.scroll.motionCircle}`,
    );
  });

  it("Scroll progress should be disabled at the top of the container", () => {
    const containerRef = {
      current: document.createElement("div"),
    } as React.RefObject<HTMLDivElement>;
    renderWithPortfolioLight(
      <ScrollProgress size={80} $container={containerRef} />,
    );
    const progress = screen.getByTestId("progress-button");
    expect(progress).toBeDisabled();
  });

  it("Scroll progress should be enabled when container is scrolled down", () => {
    const mockDiv = document.createElement("div");
    Object.defineProperty(mockDiv, "scrollTop", {
      writable: true,
      value: 0,
    });
    const containerRef = {
      current: mockDiv,
    } as React.RefObject<HTMLDivElement>;

    renderWithPortfolioLight(
      <ScrollProgress size={80} $container={containerRef} />,
    );
    const progress = screen.getByTestId("progress-button");

    act(() => {
      mockDiv.scrollTop = 100;
      fireEvent.scroll(mockDiv);
    });

    expect(progress).not.toBeDisabled();
  });

  it("Scroll progress should scroll container to top when clicked", () => {
    const mockDiv = document.createElement("div");
    // Mock the scrollTo method
    mockDiv.scrollTo = vi.fn();
    const scrollSpy = vi.spyOn(mockDiv, "scrollTo");
    Object.defineProperty(mockDiv, "scrollTop", {
      writable: true,
      value: 200,
    });
    const containerRef = {
      current: mockDiv,
    } as React.RefObject<HTMLDivElement>;

    renderWithPortfolioLight(
      <ScrollProgress size={80} $container={containerRef} />,
    );
    const progress = screen.getByTestId("progress-button");

    act(() => {
      fireEvent.scroll(mockDiv);
    });

    fireEvent.click(progress);
    expect(scrollSpy).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
