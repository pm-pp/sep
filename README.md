# Exercise

## Tech stack

- ♥️ [Node 22](https://nodejs.org/en/download)
- ⚛️ [React 19](https://reactjs.org/)
- 📚 [Storybook](https://storybook.js.org/) - Components preview
- 🖌️ [Tailwind CSS](https://tailwindcss.com/)
- ⏩ [Vite](https://vitejs.dev/) - Run and build the project blazingly fast!
- ⚡ [Vitest](https://vitest.dev/) - Components Unit Testing
- ⚡ [MSW](https://mswjs.io/) - API mocking for JavaScript
- 📐 [Biome](https://biomejs.dev/) - Formatting and Linting
- 🌟 [Typescript](https://www.typescriptlang.org/)

## Getting Started

1. Install dependencies with `pnpm i` (first run `corepack enable` to enable pnpm)

## Main Scripts

Always prepending pnpm:

- `dev`: Bootstrap the Storybook preview with Hot Reload.
- `build`: Builds the static storybook project.
- `build:lib`: Builds the component library into the **dist** folder.
- `lint`: Applies linting based on the rules defined in **biome.json**.
- `format`: Formats files using the biome rules defined in **biome.json**.
- `test`: Runs testing using watch mode.
- `test:cov`: Runs testing displaying a coverage report.
