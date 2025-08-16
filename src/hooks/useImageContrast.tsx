import { useEffect, useState } from "react";

interface UseImageContrastOptions {
  imageUrl: string;
  backgroundHex: string;
  threshold?: number; // WCAG threshold, default 4.5 for normal text
  sampleStep?: number; // Pixel sampling step size, default 1 = every pixel
}

interface UseImageContrastResult {
  contrastRatio: number | null;
  isAccessible: boolean | null;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook that checks WCAG contrast between an image and a background color.
 */
export function useImageContrast({
  imageUrl,
  backgroundHex,
  threshold = 4.5,
  sampleStep = 1,
}: UseImageContrastOptions): UseImageContrastResult {
  const [contrastRatio, setContrastRatio] = useState<number | null>(null);
  const [isAccessible, setIsAccessible] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for invalid inputs
    if (!imageUrl || !backgroundHex) {
      setLoading(false);
      setError("Image URL and background hex are required");
      return;
    }

    // Validate hex format
    if (!/^#[0-9A-Fa-f]{6}$/.test(backgroundHex)) {
      setLoading(false);
      setError("Invalid hex color format");
      return;
    }

    setLoading(true);
    setError(null);
    setContrastRatio(null);
    setIsAccessible(null);

    const image = new Image();
    image.crossOrigin = "Anonymous";

    const cleanup = () => {
      image.onload = null;
      image.onerror = null;
    };

    const calculateAverageColor = (
      canvas: HTMLCanvasElement,
      context: CanvasRenderingContext2D,
    ) => {
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data: pixels } = imageData;

      let redSum = 0,
        greenSum = 0,
        blueSum = 0;
      let sampledPixelCount = 0;

      // Sample pixels with the specified step size
      const stepSize = sampleStep * 4; // 4 bytes per pixel (RGBA)

      for (let i = 0; i < pixels.length; i += stepSize) {
        redSum += pixels[i]; // Red
        greenSum += pixels[i + 1]; // Green
        blueSum += pixels[i + 2]; // Blue
        // Skip alpha channel (pixels[i + 3])
        sampledPixelCount++;
      }

      return {
        red: redSum / sampledPixelCount,
        green: greenSum / sampledPixelCount,
        blue: blueSum / sampledPixelCount,
      };
    };

    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) {
          throw new Error("Canvas 2D context is not supported");
        }

        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);

        const averageImageColor = calculateAverageColor(canvas, context);
        const imageLuminance = getRelativeLuminance(
          averageImageColor.red,
          averageImageColor.green,
          averageImageColor.blue,
        );

        const backgroundRgb = hexToRgb(backgroundHex);
        const backgroundLuminance = getRelativeLuminance(
          backgroundRgb.r,
          backgroundRgb.g,
          backgroundRgb.b,
        );

        const contrastValue = calculateContrastRatio(
          imageLuminance,
          backgroundLuminance,
        );

        setContrastRatio(Math.round(contrastValue * 100) / 100); // Round to 2 decimal places
        setIsAccessible(contrastValue >= threshold);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to analyze image contrast";
        setError(errorMessage);
      } finally {
        setLoading(false);
        cleanup();
      }
    };

    image.onerror = () => {
      setError(`Failed to load image: ${imageUrl}`);
      setLoading(false);
      cleanup();
    };

    image.src = imageUrl;

    return cleanup;
  }, [imageUrl, backgroundHex, threshold, sampleStep]);

  return { contrastRatio, isAccessible, loading, error };
}

/**
 * Calculates relative luminance by WCAG 2.1 specifications.
 * @param r Red channel value (0-255)
 * @param g Green channel value (0-255)
 * @param b Blue channel value (0-255)
 * @returns Relative luminance value (0-1)
 */
function getRelativeLuminance(r: number, g: number, b: number): number {
  const normalizeChannel = (channel: number): number => {
    const normalized = channel / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  };

  const [red, green, blue] = [r, g, b].map(normalizeChannel);

  // ITU-R BT.709 coefficients for luminance calculation
  return red * 0.2126 + green * 0.7152 + blue * 0.0722;
}

/**
 * Calculates contrast ratio between two luminance values by WCAG 2.1 specifications.
 * @param lum1 First luminance value
 * @param lum2 Second luminance value
 * @returns Contrast ratio (1:1 to 21:1)
 */
function calculateContrastRatio(lum1: number, lum2: number): number {
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Converts a 6-digit HEX color string to RGB values.
 * @param hex HEX color string (e.g., "#FF0000")
 * @returns RGB object with r, g, b values (0-255)
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const hexValue = parseInt(hex.slice(1), 16);
  return {
    r: (hexValue >> 16) & 255,
    g: (hexValue >> 8) & 255,
    b: hexValue & 255,
  };
}
