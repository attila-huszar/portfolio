import globals from 'globals'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'

export default [
  reactRecommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  { ignores: ['dist'] },
]
