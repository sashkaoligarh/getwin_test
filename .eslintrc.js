module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  overrides: [],
  parserOptions: {
    project:['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', "react-hooks", '@typescript-eslint', "prettier"],
  ignorePatterns: ['./src/reportWebVitals.ts'],
  rules: {
    "react/react-in-jsx-scope": "off",
    "camelcase": "error",
    "spaced-comment": "error",
    "quotes": ["error", "single"],
    "no-duplicate-imports": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    '@typescript-eslint/explicit-function-return-type': [
      'off',
    ],
  },
};
