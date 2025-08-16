import "@testing-library/jest-dom";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { portfolioDark, portfolioLight } from "../../../theme/portfolioThemes";
import Icon from "../Icon";

// Mock the useImageContrast hook
vi.mock("../../../hooks/useImageContrast", () => ({
  useImageContrast: vi.fn(),
}));

const mockUseImageContrast = vi.mocked(
  await import("../../../hooks/useImageContrast"),
).useImageContrast;

const renderWithPortfolioLight = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioLight}>{ui}</ThemeProvider>);
const renderWithPortfolioDark = (ui: React.ReactNode) =>
  render(<ThemeProvider theme={portfolioDark}>{ui}</ThemeProvider>);

// Mock image for testing
const mockImageSrc = "https://example.com/test-icon.png";
const mockAltText = "Test icon";

describe("Icon component", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();

    // Mock successful image contrast check by default
    mockUseImageContrast.mockReturnValue({
      contrastRatio: 5.2,
      isAccessible: true,
      loading: false,
      error: null,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Basic rendering", () => {
    it("Icon should render with correct size styling", () => {
      renderWithPortfolioLight(
        <Icon src={mockImageSrc} alt={mockAltText} size="small" />,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toHaveStyle(`width: ${portfolioLight["small"].icon}`);
      expect(icon).toHaveStyle(`height: ${portfolioLight["small"].icon}`);
    });

    it("Icon should have proper alt text", () => {
      renderWithPortfolioLight(<Icon src={mockImageSrc} alt={mockAltText} />);

      const icon = screen.getByAltText(mockAltText);
      expect(icon).toHaveAttribute("alt", mockAltText);
    });
  });

  describe("User interaction props", () => {
    it("should disable user selection and pointer events by default", () => {
      renderWithPortfolioLight(<Icon src={mockImageSrc} alt={mockAltText} />);

      const icon = screen.getByTestId("icon");
      expect(icon).toHaveStyle("user-select: none");
      expect(icon).toHaveStyle("pointer-events: none");
    });

    it("should enable user selection and pointer events when $selectevents is true", () => {
      renderWithPortfolioLight(
        <Icon src={mockImageSrc} alt={mockAltText} $selectevents={true} />,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toHaveStyle("user-select: auto");
      expect(icon).toHaveStyle("pointer-events: auto");
    });
  });

  describe("useImageContrast hook integration", () => {
    it("Icon should call useImageContrast with correct parameters", () => {
      renderWithPortfolioLight(
        <Icon src={mockImageSrc} alt={mockAltText} size="medium" />,
      );

      expect(mockUseImageContrast).toHaveBeenCalledWith({
        imageUrl: mockImageSrc,
        backgroundHex: portfolioLight.colors.background,
        threshold: 4.1,
        sampleStep: 1,
      });
    });

    it("Icon should call useImageContrast with dark theme background", () => {
      renderWithPortfolioDark(
        <Icon src={mockImageSrc} alt={mockAltText} size="medium" />,
      );

      expect(mockUseImageContrast).toHaveBeenCalledWith({
        imageUrl: mockImageSrc,
        backgroundHex: portfolioDark.colors.background,
        threshold: 4.1,
        sampleStep: 1,
      });
    });

    it("Icon should render without background div when image is accessible", () => {
      mockUseImageContrast.mockReturnValue({
        contrastRatio: 6.8,
        isAccessible: true,
        loading: false,
        error: null,
      });

      renderWithPortfolioLight(
        <Icon src={mockImageSrc} alt={mockAltText} size="medium" />,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toBeInTheDocument();

      // Should not have a background container when accessible
      // The icon should be directly rendered without a wrapping div
      expect(icon.parentElement).not.toHaveStyle(
        "background-color: rgb(255, 255, 255)",
      );
    });

    it("Icon should render with background div when image is not accessible", () => {
      mockUseImageContrast.mockReturnValue({
        contrastRatio: 2.1,
        isAccessible: false,
        loading: false,
        error: null,
      });

      renderWithPortfolioLight(
        <Icon src={mockImageSrc} alt={mockAltText} size="medium" />,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toBeInTheDocument();

      // Should have a background container when not accessible
      const container = screen.getByTestId("icon-background");
      expect(container).toBeInTheDocument();
      expect(container).toHaveStyle("background-color: rgb(255, 255, 255)");
      expect(container).toHaveStyle("border-radius: 100%");
      expect(container).toHaveStyle(
        `width: calc(${portfolioLight["medium"].icon} + 16px)`,
      );
    });

    it("Icon should handle loading state", () => {
      mockUseImageContrast.mockReturnValue({
        contrastRatio: null,
        isAccessible: null,
        loading: true,
        error: null,
      });

      renderWithPortfolioLight(
        <Icon src={mockImageSrc} alt={mockAltText} size="medium" />,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toBeInTheDocument();
      // Component should still render while loading
    });

    it("Icon should handle error state", () => {
      mockUseImageContrast.mockReturnValue({
        contrastRatio: null,
        isAccessible: null,
        loading: false,
        error: "Failed to load image",
      });

      renderWithPortfolioLight(
        <Icon src={mockImageSrc} alt={mockAltText} size="medium" />,
      );

      const icon = screen.getByTestId("icon");
      expect(icon).toBeInTheDocument();
      // Component should still render despite error
    });
  });

  describe("Contrast-based rendering behavior", () => {
    it("Icon should adapt layout based on contrast check results", async () => {
      // Start with inaccessible contrast
      mockUseImageContrast.mockReturnValue({
        contrastRatio: 2.0,
        isAccessible: false,
        loading: false,
        error: null,
      });

      const { rerender } = renderWithPortfolioLight(
        <Icon src={mockImageSrc} alt={mockAltText} size="medium" />,
      );

      let icon = screen.getByTestId("icon");
      expect(icon.parentElement).toHaveStyle(
        "background-color: rgb(255, 255, 255)",
      );

      // Update to accessible contrast
      mockUseImageContrast.mockReturnValue({
        contrastRatio: 5.5,
        isAccessible: true,
        loading: false,
        error: null,
      });

      rerender(
        <ThemeProvider theme={portfolioLight}>
          <Icon src={mockImageSrc} alt={mockAltText} size="medium" />
        </ThemeProvider>,
      );

      icon = screen.getByTestId("icon");
      expect(icon.parentElement).not.toHaveStyle(
        "background-color: rgb(255, 255, 255)",
      );
    });
  });
});
