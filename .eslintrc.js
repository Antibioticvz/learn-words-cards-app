module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
  },
}
