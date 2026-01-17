import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import importPlugin from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier/flat";

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
      // 1. 네이밍 컨벤션 (Variable, Function, Class, Constant)
      "@typescript-eslint/naming-convention": [
        "error",
        // 변수 및 함수: camelCase
        {
          selector: ["variable", "function"],
          format: ["camelCase"],
          // 단, 상수는 제외하기 위해 아래에 상수를 따로 정의합니다.
        },
        // 클래스: PascalCase
        {
          selector: "class",
          format: ["PascalCase"],
        },
        // 상수: UPPER_SNAKE_CASE
        {
          selector: "variable",
          modifiers: ["const", "global"],
          format: ["UPPER_CASE"],
        },
      ],

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

      /* 3단계 이상 상대경로 금지 */
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../../../*"],
              message:
                "상위 디렉토리 3단계 이상 접근 시 alias(@/...) 기반 절대경로를 사용하세요.",
            },
          ],
        },
      ],

      /* import 순서: alias → 상대경로 */
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
  eslintConfigPrettier,
  tseslint.configs.recommended,
]);
