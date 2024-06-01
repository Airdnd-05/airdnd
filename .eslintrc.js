module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb-base',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: false,
        project: './tsconfig.json',
      },
    },
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules/', 'build/'],
  rules: {
    // Original rules from the first configuration
    'no-console': 'warn',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'vars-on-top': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'func-names': 'off',
    'prefer-template': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'prefer-arrow-callback': 'error',
    'require-await': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowShortCircuit: true,
        allowTaggedTemplates: true,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
  },
}
