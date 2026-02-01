import globals from "globals";

import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

import baseConfig from "./eslint.config.mjs";

export default defineConfig([
  ...baseConfig,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // 컴포넌트 이름은 PascalCase
      "react/jsx-pascal-case": [
        "error",
        {
          allowAllCaps: false,
          ignore: [],
        },
      ],

      /* Fragment 축약 문법 권장 */
      "react/jsx-fragments": ["error", "syntax"],

      /* Boolean prop 축약 허용 */
      "react/jsx-boolean-value": ["error", "never"],

      /* JSX 중괄호 불필요한 경우 제거 */
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],

      // 컴포넌트는 함수 선언문으로 정의
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "function-expression",
        },
      ],

      // 자동 포커스 금지
      "jsx-a11y/no-autofocus": "warn",
      // 클릭 요소에 키보드 이벤트 요구
      "jsx-a11y/click-events-have-key-events": "warn",
      // 정적 요소 상호작용 제한
      "jsx-a11y/no-static-element-interactions": "warn",
    },
  },
]);
