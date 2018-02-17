module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  plugins: ["prettier", "react"],
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    process: true,
    modules: true,
  },
  rules: {
    "no-debugger": 0,
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        semi: false,
      },
    ],
    semi: ["error", "never"],
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "no-confusing-arrow": 0,
    "no-console": 0,
    "no-else-return": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "no-restricted-syntax": 0,
    "no-await-in-loop": 0,
    camelcase: 0,
  },
}
