# Erin M Young UI

A modern React component library built with Storybook, TypeScript, styled-components, and Framer Motion.

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-9.1.0-pink.svg)](https://storybook.js.org/)
[![styled-components](https://img.shields.io/badge/styled--components-6.1.19-orange.svg)](https://styled-components.com/)

## ✨ Features

- 🎨 **Theming**: Built-in light/dark mode support with customizable themes
- 🚀 **Modern Stack**: React 19, TypeScript 5.8, Storybook 9, Vite 7
- 📱 **Responsive**: Mobile-first design approach
- 🎭 **Animations**: Smooth animations powered by Framer Motion
- 📚 **Documented**: Interactive Storybook documentation
- 🧪 **Tested**: Comprehensive test coverage with Vitest
- 🎯 **Accessible**: Built with accessibility in mind

## 📦 Installation

```bash
npm install erinmyoung-ui styled-components framer-motion
# or
yarn add erinmyoung-ui styled-components framer-motion
# or
pnpm add erinmyoung-ui styled-components framer-motion
```

## 🚀 Quick Start

```tsx
import { Button, ThemeProvider } from "erinmyoung-ui";
import { portfolioLight } from "erinmyoung-ui/themes";

function App() {
  return (
    <ThemeProvider theme={portfolioLight}>
      <Button
        text="Hello World"
        size="medium"
        onClick={() => alert("Clicked!")}
      />
    </ThemeProvider>
  );
}
```

## 🎨 Components

### Button

Interactive button component with multiple sizes and hover effects.

```tsx
import { Button } from "erinmyoung-ui";

<Button text="Click me" size="large" onClick={() => console.log("Clicked!")} />;
```

### Arrow

Directional arrow button for navigation.

```tsx
import { Arrow } from "erinmyoung-ui";

<Arrow $orientation="right" onClick={() => navigate("/next")} />;
```

### Exit

Close/exit button component.

```tsx
import { Exit } from "erinmyoung-ui";

<Exit onClick={() => closeModal()} />;
```

### Icon

Versatile icon component with accessibility features and contrast checking.

```tsx
import { Icon } from "erinmyoung-ui";

<Icon
  src="/path/to/icon.svg"
  alt="Settings icon"
  backgroundColor="#ffffff"
  size="medium"
/>;
```

### ImageWithBackground

Image component with background color support and responsive behavior.

```tsx
import { ImageWithBackground } from "erinmyoung-ui";

<ImageWithBackground
  src="/path/to/image.jpg"
  alt="Product image"
  backgroundColor="#f5f5f5"
  size="large"
/>;
```

### List

Flexible list component for displaying items with consistent styling.

```tsx
import { List } from "erinmyoung-ui";

<List
  items={["Item 1", "Item 2", "Item 3"]}
  orientation="vertical"
  size="medium"
/>;
```

### ScrollProgress

Container-based scroll progress indicator with smooth animations.

```tsx
import { ScrollProgress } from "erinmyoung-ui";
import { useRef } from "react";

function ScrollableContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ height: "400px", overflowY: "auto" }}>
      {/* Your content */}
      <ScrollProgress
        $container={containerRef}
        size={80}
        $right="2rem"
        $bottom="2rem"
      />
    </div>
  );
}
```

### SectionTitle

Decorative section title with custom graphics.

```tsx
import { SectionTitle } from "erinmyoung-ui";

<SectionTitle text="Welcome Section" size="large" $fillBgColor={true} />;
```

### Spinner

Loading spinner component with theme-based sizing options.

```tsx
import { Spinner } from "erinmyoung-ui";

<Spinner size="medium" />;
```

````

## 🎨 Theming

### Built-in Themes

```tsx
import {
  portfolioLight,
  portfolioDark,
  storeLight,
  storeDark,
} from "erinmyoung-ui/themes";
````

### Custom Themes

```tsx
import type { Theme } from "erinmyoung-ui";

const customTheme: Theme = {
  mode: "light",
  colors: {
    background: "#ffffff",
    text: "#333333",
    accent: "#f0f0f0",
    border: "#cccccc",
    shadow: "#cccccc",
    titleLines: "#999999",
    circle: "#666666",
    motionCircle: "#333333",
  },
};
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/erinmyoung/erinmyoung-ui.git
cd erinmyoung-ui

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build the library
npm run build
```

### Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build the library
- `npm run test` - Run tests
- `npm run test-watch` - Run tests in watch mode
- `npm run storybook` - Start Storybook
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## 📚 Documentation

Visit [Storybook](https://storybook.js.org/docs) for interactive component documentation and examples.

## 🧪 Testing

The library includes comprehensive tests using Vitest and Testing Library:

```bash
npm test                 # Run all tests
npm run test-watch      # Watch mode
npm run test:ui         # UI mode
```

## 📄 License

MIT © [Erin Young](https://github.com/erinmyoung)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## 🔗 Links

- [Documentation](https://storybook.js.org/docs)
- [GitHub Repository](https://github.com/erinmyoung/erinmyoung-ui)
- [Issues](https://github.com/erinmyoung/erinmyoung-ui/issues)
- [Changelog](https://github.com/erinmyoung/erinmyoung-ui/releases)
