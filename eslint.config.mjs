import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Bridge the repository's existing Next 15 ESLint preset to ESLint 9.
// Next 16 no longer provides the `next lint` command.
const compat = new FlatCompat({ baseDirectory: path.dirname(fileURLToPath(import.meta.url)) });
export default [
  { ignores: ['.next/**', 'node_modules/**', 'test-results/**', 'playwright-report/**'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
