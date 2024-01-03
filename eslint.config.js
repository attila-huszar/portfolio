import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
  },
  { ignores: ['dist'] },
]
