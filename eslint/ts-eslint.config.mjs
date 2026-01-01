import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import baseConfig from "./eslint.config.mjs";

export default defineConfig([
  ...baseConfig,
  {
    files: ["**/*.{ts,mts,cts}"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",

      /* any 금지 */
      "@typescript-eslint/no-explicit-any": "error",

      /* non-null assertion 금지 */
      "@typescript-eslint/no-non-null-assertion": "error",

      /* 변수는 타입 추론 선호 */
      "@typescript-eslint/no-inferrable-types": "warn",

      /* 함수 반환 타입 명시 */
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true, // 콜백 허용
          allowTypedFunctionExpressions: true, // 이미 타입이 있으면 허용
        },
      ],

      /* type / interface 기준  - 기본은 type 사용 */
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  tseslint.configs.recommended,
]);
