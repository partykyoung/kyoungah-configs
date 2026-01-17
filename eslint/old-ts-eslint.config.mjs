// import { defineConfig } from "eslint/config";
// import tseslint from "typescript-eslint";

// import baseConfig from "./eslint.config.mjs";

// export default defineConfig([
//   ...baseConfig,
//   {
//     files: ["**/*.{ts,mts,cts}"],
//     rules: {
//       /* var 사용 금지 */
//       "no-unused-vars": "off",
//       "@typescript-eslint/no-unused-vars": "error",

//       /* any 금지 */
//       "@typescript-eslint/no-explicit-any": "error",

//       /* non-null assertion 금지 */
//       "@typescript-eslint/no-non-null-assertion": "error",

//       /* 변수는 타입 추론 선호 */
//       "@typescript-eslint/no-inferrable-types": "warn",

//       /* 함수 반환 타입 명시 */
//       "@typescript-eslint/explicit-function-return-type": [
//         "error",
//         {
//           allowExpressions: true, // 콜백 허용
//           allowTypedFunctionExpressions: true, // 이미 타입이 있으면 허용
//         },
//       ],

//       /* type / interface 기준  - 기본은 type 사용 */
//       "@typescript-eslint/consistent-type-definitions": ["error", "type"],

//       // 1. 네이밍 컨벤션 (Variable, Function, Class, Constant)
//       "@typescript-eslint/naming-convention": [
//         "error",
//         // 변수 및 함수: camelCase
//         {
//           selector: ["variable", "function"],
//           format: ["camelCase"],
//           // 단, 상수는 제외하기 위해 아래에 상수를 따로 정의합니다.
//         },
//         // 클래스: PascalCase
//         {
//           selector: "class",
//           format: ["PascalCase"],
//         },
//         // 상수: UPPER_SNAKE_CASE
//         {
//           selector: "variable",
//           modifiers: ["const", "global"],
//           format: ["UPPER_CASE"],
//         },
//       ],

//       // 2. 파일명: kebab-case
//       "check-file/filename-naming-convention": [
//         "error",
//         {
//           "**/*.{js,jsx}": "KEBAB_CASE",
//         },
//       ],

//       // 3. 폴더명: kebab-case
//       "check-file/folder-naming-convention": [
//         "error",
//         {
//           "**/": "KEBAB_CASE",
//         },
//       ],
//     },
//   },
//   tseslint.configs.recommended,
// ]);
