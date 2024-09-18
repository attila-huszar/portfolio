import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import importX from 'eslint-plugin-import-x'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  eslint.configs.recommended,
  importX.flatConfigs.recommended,
  react.configs.flat.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      'react-refresh': reactRefresh,
      prettier: prettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        gtag: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import-x/no-unresolved': ['error', { ignore: ['.svg?'] }],
      'prettier/prettier': 'warn',
    },
  },
  {
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },
  { ignores: ['dist'] },
]
