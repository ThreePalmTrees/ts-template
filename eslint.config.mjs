import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,ts}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                // Node.js globals
                console: 'readonly',
                exports: 'readonly',
                module: 'readonly',
                process: 'readonly',
                __dirname: 'readonly',
                require: 'readonly',
                // Browser globals
                window: 'readonly',
                document: 'readonly',
                // ES2022 globals
                Promise: 'readonly',
                Set: 'readonly',
                Map: 'readonly',
                WeakMap: 'readonly',
                WeakSet: 'readonly',
                BigInt: 'readonly',
                globalThis: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': typescript,
            'prettier': prettier,
        },
        rules: {
            ...typescript.configs.recommended.rules,
            'prettier/prettier': 'error',
            'no-console': 'off',
            'no-undef': 'off' // TypeScript handles this better
        }
    }
]; 