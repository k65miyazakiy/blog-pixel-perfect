# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run serve`: Serve built content
- `npm run lint`: Run ESLint
- `npm run format`: Run Prettier formatting
- `npm run clean`: Remove build directories
- `npm run storybook`: Start Storybook for component development
- `npm run build-storybook`: Build Storybook static site

## Code Style Guidelines
- **Imports**: External dependencies first, then internal imports using `@/*` path aliases
- **Components**: PascalCase for components and files
- **Variables**: camelCase for variables and functions
- **Types**: Use strict TypeScript typing with explicit type annotations
- **MDX**: MDX files are type-checked (`"mdx": { "checkMdx": true }`)
- **Styling**: Tailwind CSS with plugin integration
- **Formatting**: Prettier with tailwindcss plugin (2-space indentation)
- **Error Handling**: Use conditional rendering and type safety
- **File Structure**: One component per file, stories in component directories
- **Naming**: Descriptive, semantic names reflecting purpose
- **Next.js Conventions**: Follow Next.js App Router structure and conventions

Always verify changes with `npm run lint` before committing.