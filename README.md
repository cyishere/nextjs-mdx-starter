# A Next.js + MDX Starter

This starter project demonstrates the integration of MDX with Next.js, drawing inspiration from the elegant [Hylia Starter Kit](https://hylia.website/) for Eleventy.

Key features and technologies:

- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for MDX processing and rendering
- A CSS architecture combining vanilla CSS and CSS Modules, following the [CUBE CSS](https://cube.fyi/) methodology (Learn more about this approach in this detailed [blog post](https://piccalil.li/blog/cube-css/))

  _With this setup for a starter also means it's easier to switch to other prefered styling solution._

- [Bright](https://bright.codehike.org/) for beautiful code syntax highlighting, optimized for React Server Components

**NOTE:** The dark/light theme switching implementation and file handling utilities were adapted from [the Joy of React course exercise](https://github.com/joy-of-react/project-blog).

## Changelog

Feb 2026:

Upgrade to Next.js 16.

- Bump `next` and `eslint-config-next` to 16.1.6
- Replace `FlatCompat` with native flat config imports in `eslint.config.mjs`
- Update lint script to use eslint directly (next lint removed in v16)
- Update tsconfig: jsx preserve -> react-jsx, add .next/dev/types include
- Update `package.json` to configure `sharp`/`unrs-resolver` build scripts

May 2025:

- For better practise: use Prettier only for formatting and use ESLint for sorting imports.
- Update `next.config.ts` to ensure the `content/` folder is accessible to Vercel's serverless functions after deployment

April 2025:

- Updated Next.js to version 15.3.1
- Migrated from styled-components to a pure CSS/CSS Modules approach
- Migrated to TypeScript
