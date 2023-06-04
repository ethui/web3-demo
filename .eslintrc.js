module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  ignorePatterns: ["**/*.generated.ts", "lib/**", "next-env.d.ts", "out/**"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/space-before-function-paren": 0,
    "@typescript-eslint/no-confusing-void-expressions": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
