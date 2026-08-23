import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import unicorn from 'eslint-plugin-unicorn';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      unicorn,
    },

    rules: {
      ...unicorn.configs.recommended.rules,
      'unicorn/no-null': 'off',
    },
  },

  prettier,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
