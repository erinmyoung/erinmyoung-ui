import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import storybook from "eslint-plugin-storybook";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config([
  // Global ignores (equivalent to .gitignore patterns)
  globalIgnores([
    "dist/**",
    "dist-ssr/**",
    "node_modules/**",
    "storybook-static/**",
    "*.local",
    "**/*.log",
    ".vscode/**",
    "!.vscode/extensions.json",
    ".idea/**",
    "**/.DS_Store",
    "**/*.suo",
    "**/*.ntvs*",
    "**/*.njsproj",
    "**/*.sln",
    "**/*.sw?"
  ]),

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      storybook: storybook,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.eslintRecommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Custom rule overrides
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // Since we're using TypeScript
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
