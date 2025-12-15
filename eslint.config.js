import { hope } from "eslint-config-mister-hope";

export default hope({
  ignores: ["dist/**", "node_modules/**"],
  languageOptions: {
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  tsImport: true,
});
