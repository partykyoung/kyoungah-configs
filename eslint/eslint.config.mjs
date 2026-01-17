import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

import importPlugin from "eslint-plugin-import";
import checkFilePlugin from "eslint-plugin-check-file";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  eslintConfigPrettier,
  {
    ignores: ["**/*.config.{js,mjs,cjs,ts,mts,cts}", "**/.*rc.{js,mjs,cjs}"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, import: importPlugin, "check-file": checkFilePlugin },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      /* console.log 금지 */
      "no-console": ["error", { allow: ["warn", "error"] }],

      /* debugger 금지 */
      "no-debugger": "error",

      /* any 금지 */
      "@typescript-eslint/no-explicit-any": "error",

      /* @ts-expect-error 사용, @ts-ignore 금지 */
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-check": false,
        },
      ],

      /* 사용하지 않는 변수 금지 */
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",

      /* 선언되지 않은 전역 변수 사용 방지 */
      "no-undef": "error",

      /* non-null assertion 금지 */
      "@typescript-eslint/no-non-null-assertion": "error",

      /* 함수 반환 타입 명시 */
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true, // 콜백 허용
          allowTypedFunctionExpressions: true, // 이미 타입이 있으면 허용
        },
      ],

      /* 변수는 타입 추론 선호 */
      "@typescript-eslint/no-inferrable-types": "warn",

      /* type / interface 기준  - 기본은 type 사용 */
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      /* Error 객체만 throw 허용 */
      "no-throw-literal": "error",

      /* === / !== 강제 */
      eqeqeq: ["error", "always"],

      /* if / else / loop 중괄호 필수 */
      curly: ["error", "all"],

      /* 네이밍 컨벤션 (Variable, Function, Class, Constant) */
      "@typescript-eslint/naming-convention": [
        "error",
        {
          // 변수 및 함수: camelCase
          selector: ["variable", "function"],
          format: ["camelCase"],
        },
        // 클래스: PascalCase
        {
          selector: "class",
          format: ["PascalCase"],
        },
        // 상수: UPPER_SNAKE_CASE
        {
          selector: "variable",
          modifiers: ["const"],
          format: ["UPPER_CASE", "camelCase"],
        },
        // 타입/인터페이스: PascalCase, I 접두사 및 Type 접두사/접미사 금지
        {
          selector: ["typeAlias", "interface"],
          format: ["PascalCase"],
          custom: {
            regex: "^(I[A-Z]|.*Type$)",
            match: false,
          },
        },
      ],

      /*  파일명: kebab-case */
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{js,jsx}": "KEBAB_CASE",
        },
      ],

      /* 폴더명: kebab-case */
      "check-file/folder-naming-convention": [
        "error",
        {
          "**/": "KEBAB_CASE",
        },
      ],

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
  tseslint.configs.recommended,
]);
