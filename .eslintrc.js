module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
  },
};
