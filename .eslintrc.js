module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'jsx-a11y', '@next/eslint-plugin-next'],
  settings: {
    react: {
      version: '18.2.0'
    }
  },
  rules: {
    // Your custom rules
  },
};