import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      'react-refresh': reactRefresh,
      prettier,
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
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
          allowExportNames: ['InfoContext', 'ThemeContext'],
        },
      ],
      'prettier/prettier': 'warn',
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },
  { ignores: ['dist'] },
])
