module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier', 'cypress'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'vue/order-in-components': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'vue/require-default-prop': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
  },
};
