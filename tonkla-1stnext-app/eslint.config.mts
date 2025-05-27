// eslint.config.ts
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import type { FlatConfigItem } from "eslint";

// จำลอง __dirname สำหรับ ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ใช้ FlatCompat เพื่อแปลง config แบบเก่ามาใช้ใน Flat Config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// กำหนด eslint config ที่จะใช้
const eslintConfig: FlatConfigItem[] = [
  // ✅ ใช้ config พื้นฐานจาก Next.js และ TypeScript
  ...compat.extends("next/core-web-vitals", "next", "next/typescript"),

  // ✅ เพิ่ม config พื้นฐานทั่วไป
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  // ✅ ตัวอย่างกฎเพิ่มเติมที่คุณสามารถปรับได้
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@next/next/no-img-element": "off", // ใช้ <img> ได้ใน Next.js
    },
  },
];

export default eslintConfig;
