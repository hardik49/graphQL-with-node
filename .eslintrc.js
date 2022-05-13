module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'eqeqeq': ['error', 'always'],
    'no-console': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'array-bracket-spacing': 'error',
    'no-unneeded-ternary': 'error',
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    'quotes': ['error', 'single']
  },
};