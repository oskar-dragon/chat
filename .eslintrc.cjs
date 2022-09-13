module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
  },
};
