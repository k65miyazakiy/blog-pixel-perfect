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

## Code Style Guidelines
- **Imports**: External dependencies first, then internal imports
- **Components**: PascalCase for components and files
- **Variables**: camelCase for variables and functions
- **Types**: Prefer type over interface, explicit type annotations
- **Styling**: Tailwind CSS with plugin integration
- **Formatting**: Prettier with tailwindcss plugin
- **Error Handling**: Use conditional rendering and type safety
- **File Structure**: One component per file for larger components
- **Naming**: Descriptive, semantic names reflecting purpose

Always verify changes with `npm run lint` before committing.