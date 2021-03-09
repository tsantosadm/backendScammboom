module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "not-an-aardvark/node",
    "plugin:node/recommended",
    "plugin:eslint-plugin/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "self/prettier": ["error"],
    "eslint-plugin/report-message-format": ["error", "^[^a-z].*\\.$"],
  },
};
