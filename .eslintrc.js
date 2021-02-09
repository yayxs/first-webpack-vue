module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/newline-after-import': ['off', { count: 2 }],
    'no-console': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
};
