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

      /* 사용하지 않는 변수 금지 */
      "no-unused-vars": "error",

      /* 선언되지 않은 전역 변수 사용 방지 */
      "no-undef": "error",

      /* Error 객체만 throw 허용 */
      "no-throw-literal": "error",

      /* === / !== 강제 */
      eqeqeq: ["error", "always"],

      /* if / else / loop 중괄호 필수 */
      curly: ["error", "all"],

      /* 콜백 함수는 화살표 함수 선호 */
      "prefer-arrow-callback": "error",

      /* 기본은 named export */
      "import/no-default-export": "error",

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
