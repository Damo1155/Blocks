import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    ignorePatterns: [
      'dist',
      'node_modules',
      'package-lock.json',
      'src/types/next-auth.d.ts',
    ],
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      '@next/next/no-img-element': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  }),
];

export default eslintConfig;
