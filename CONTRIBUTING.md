# Contributing to erinmyoung-ui

We want to make contributing to erinmyoung-ui as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/erinmyoung-ui.git
cd erinmyoung-ui

# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Run tests
npm test

# Run tests in watch mode
npm run test-watch
```

### Component Development Guidelines

1. **Component Structure**:

   ```
   src/components/component-name/
   ├── ComponentName.tsx
   ├── index.ts
   ├── __docs__/
   │   ├── ComponentName.stories.tsx
   │   ├── ComponentName.mdx
   │   └── ComponentNameExample.tsx
   └── __test__/
       └── ComponentName.test.tsx
   ```

2. **TypeScript**: All components must be written in TypeScript with proper type definitions.

3. **Styling**: Use styled-components with the theme system.

4. **Testing**: Include comprehensive tests using Vitest and Testing Library.

5. **Documentation**: All components must have Storybook stories and MDX documentation.

6. **Accessibility**: Ensure components are accessible (ARIA attributes, keyboard navigation, etc.).

### Code Style

- Use TypeScript for all code
- Follow the existing ESLint configuration
- Use Prettier for code formatting
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Commit Messages

Use conventional commits:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

## Bug Reports

We use GitHub issues to track public bugs. Report a bug by opening a new issue.

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
- Be specific!
- Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Feature Requests

We welcome feature requests! Please:

1. Check if the feature has already been requested
2. Provide a clear description of the problem you're trying to solve
3. Describe the solution you'd like
4. Consider if this fits the scope of the library

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md)
