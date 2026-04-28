# Next.js + MDX Starter

This starter project demonstrates the integration of MDX with Next.js, drawing inspiration from the elegant [Hylia Starter Kit](https://hylia.website/) for Eleventy.

## Key Features & Technologies

- **MDX Processing:** Uses [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) and [gray-matter](https://github.com/jonschlinkert/gray-matter) for parsing and rendering MDX content.
- **Image Optimization:** Includes the [rehype-unwrap-images](https://github.com/rehypejs/rehype-unwrap-images) plugin to remove unnecessary wrapping paragraph (`<p>`) tags around images (`<img>`).
- **Syntax Highlighting:** Features [Bright](https://bright.codehike.org/) for beautiful code syntax highlighting, fully optimized for React Server Components.

## Styling

In the latest version, all styling has been consolidated into a single file: `src/app/globals.css`. These styles are applied directly to semantic HTML elements without relying on utility classes.

Because this is a starter template, this approach makes it incredibly easy to adopt your preferred styling solution—simply delete the `globals.css` file and start fresh!

---

**Note:** The dark/light theme switching implementation and file handling utilities were adapted from [The Joy of React](https://github.com/joy-of-react/project-blog) course exercise.

❗ **Note for Next.js < 16:** Prior to Next.js 16, the following configuration was required in `next.config.ts` to ensure Vercel's serverless environment could locate the `content` folder:

```ts
const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/*': ['./content/**/*']
  }
};
```

## Changelog

### April 2026

- **Styling Refactor:** Consolidated all styles into a single `src/app/globals.css` file, removing CSS modules and multiple CSS files for a more streamlined approach.
- **Component Simplification:** Flattened the component directory structure by removing components like `Hero` and `Info`, retaining only those intended for reuse.
- **MDX Component Mapping:** Moved the MDX `COMPONENTS_MAP` directly into `CustomMDXRemote.tsx` and removed the separate `mdx-components.tsx` file.
- **Scripts Update:** Updated the `format` script in `package.json` to utilize Prettier's `--experimental-cli`.

### February 2026

**Upgraded to Next.js 16**

- Bumped `next` and `eslint-config-next` to version `16.1.6` and `6.0.0`.
- Replaced `FlatCompat` with native flat config imports in `eslint.config.mjs`.
- Updated the lint script to use `eslint` directly (`next lint` was removed in v16).
- Updated `tsconfig.json`: changed `jsx` from `preserve` to `react-jsx`, and added `.next/dev/types` to the `include` array.
- Updated `package.json` to configure `sharp` and `unrs-resolver` build scripts.

### May 2025

- **Tooling Best Practices:** Configured Prettier to handle formatting exclusively, while delegating import sorting to ESLint.
- Updated `next.config.ts` to ensure the `content/` folder is accessible to Vercel's serverless functions after deployment.

### April 2025

- Updated Next.js to version `15.3.1`.
- Migrated from `styled-components` to a pure CSS/CSS Modules approach.
- Migrated the codebase to TypeScript.
