import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.{js,ts}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            '@typescript-eslint': tseslint,
            'prettier': prettier
        },
        rules: {
            ...eslint.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            'prettier/prettier': 'error',
            'quotes': ['error', 'single']
        }
    },
    {
        ignores: ['node_modules/', 'dist/', 'build/']
    }
];