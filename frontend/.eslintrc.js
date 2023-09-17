module.exports = {
  extends: [
    "next/core-web-vitals",
    "standard",
    "plugin:tailwindcss/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // Other rules...
    "tailwindcss/no-custom-classname": "off",
  },
};
