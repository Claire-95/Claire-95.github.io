/* eslint-disable quote-props */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
    "arrow-body-style": ["off"],
  },
};
