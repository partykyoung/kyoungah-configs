import { defineConfig } from "eslint/config";
import reactEslintConfig from "./react-eslint.config.mjs";
import nextPlugin from "@next/eslint-plugin-next";

const nextRouteFiles = [
  "app/**/*{jsx,tsx}",
  "src/app/**/*.{jsx,tsx}",
  "apps/**/app/**/*.{jsx,tsx}",
];

const nextPageLayoutFiles = [
  "app/**/{page,layout}.{jsx,tsx}",
  "src/app/**/{page,layout}.{jsx,tsx}",
  "apps/**/app/**/{page,layout}.{jsx,tsx}",
];

const eslintConfig = defineConfig([
  ...reactEslintConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    files: nextRouteFiles,
    rules: {
      "import/no-default-export": "off",
    },
  },
  {
    files: nextPageLayoutFiles,
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Program > ExpressionStatement > Literal[value='use client']",
          message:
            "page/layout은 Server Component로 유지하세요. 'use client'는 하위 컴포넌트로 이동합니다.",
        },
      ],
    },
  },
]);

export default eslintConfig;
