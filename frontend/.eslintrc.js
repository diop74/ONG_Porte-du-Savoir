module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
  ],
  rules: {
    // Hooks
    "react-hooks/exhaustive-deps": "warn",

    // Qualité du code (exemples)
    "no-unused-vars": "warn",
    "no-console": "warn",
  },
};
