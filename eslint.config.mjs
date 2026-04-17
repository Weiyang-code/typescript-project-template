import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "dist/**", 
      "node_modules/**", 
      "webpack.config.js",
      "coverage/**",
      "**/*.js" // Optional: ignore all .js if you only care about linting .ts
    ]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  tseslint.configs.recommended,
]);
