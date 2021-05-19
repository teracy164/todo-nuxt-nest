module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/eslint-recommended'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-len': ['error', { code: 140 }],
    'comma-style': [2, 'last'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
