import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      import: importPlugin,
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      /* console.log 금지 */
      "no-console": ["error", { allow: ["warn", "error"] }],

      /* debugger 금지 */
      "no-debugger": "error",

      /* import 순서: 절대경로 먼저, 상대경로 나중에 */
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js 내장 모듈
            "external", // npm 패키지 (절대경로)
            "internal", // 프로젝트 내부 절대경로 (alias 등)
            "parent", // 상위 디렉토리 상대경로 (../)
            "sibling", // 같은 디렉토리 상대경로 (./)
            "index", // 현재 디렉토리 index
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]);
