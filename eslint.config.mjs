import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

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
  ...nextCoreWebVitals,
  ...nextTypescript,
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
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/order': [
        'error',
        {
          groups: [
            'type',
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'object'
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '^use (client|server)$',
              group: 'builtin',
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
          pathGroupsExcludedImportTypes: [],
          distinctGroup: true
        }
      ]
    }
  }
];

export default eslintConfig;
