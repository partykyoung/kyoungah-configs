import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import baseConfig from "./eslint.config.mjs";

export default defineConfig([
  ...baseConfig,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,mts,cts}"],
    rules: {
      /* any 금지 */
      "@typescript-eslint/no-explicit-any": "error",

      /* non-null assertion 금지 */
      "@typescript-eslint/no-non-null-assertion": "error",

      /* 변수는 타입 추론 선호 */
      "@typescript-eslint/no-inferrable-types": "warn",

      /* 함수 반환 타입 명시 */
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  },
]);
