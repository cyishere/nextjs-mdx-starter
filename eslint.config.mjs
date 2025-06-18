import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'public/**',
      'prisma/**',
      'src/generated/**',
      'src/generated/prisma/**'
    ]
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
      '@typescript-eslint': tsPlugin
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json'
      }
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        }
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports'
        }
      ],
      'import/no-duplicates': 'error',
      // Ensure type imports use the 'import type { ... }' syntax
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/order': [
        'error',
        {
          groups: [
            // Custom group for 'use client' or 'use server' if you want to enforce it via import/order,
            // though these are usually placed manually at the very top before any imports.
            // For example, if you want a specific regex for a "directive" group:
            // ['/^use (client|server)$/', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],

            'type', // All type imports (both external and internal) go here first
            ['builtin', 'external'], // Regular builtin and external imports
            'internal', // Regular internal imports
            ['parent', 'sibling', 'index'], // Regular relative imports
            'object' // Catch-all for any other import types not explicitly grouped
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            // Existing path groups, ensure they don't accidentally catch type imports
            // by relying on the 'type' group handling them first.
            {
              pattern: '^use (client|server)$',
              group: 'builtin', // Or a custom group if you define one above
              position: 'before'
            },
            {
              pattern: '^react',
              group: 'builtin',
              position: 'before'
            },
            {
              pattern: '^next',
              group: 'builtin',
              position: 'before'
            },
            {
              pattern: '^(@/*)/(.*)$',
              group: 'internal',
              position: 'before'
            }
          ],
          // This is important: ensure that 'type' is not excluded from path groups
          // if you want the main 'type' group to catch them.
          // However, if you have specific path groups for non-type imports and
          // want 'type' imports to be handled by the generic 'type' group,
          // then you might keep 'type' out of `pathGroupsExcludedImportTypes`.
          // For your goal, since 'type' is a top-level group, `pathGroupsExcludedImportTypes`
          // shouldn't interfere with placing type imports at the top.
          pathGroupsExcludedImportTypes: [], // Keep this empty to allow 'type' group to catch type imports
          distinctGroup: true
        }
      ]
    }
  }
];

export default eslintConfig;
