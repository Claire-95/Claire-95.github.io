/* eslint-disable quote-props */
module.exports = {
  root: true,
  ecmaVersion: 6,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
    "arrow-body-style": ["warn"],
  },
};
