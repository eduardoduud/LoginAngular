module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    'temp.js',
    '**/vendor/*.js',
    '**/*.js',
    '**/*.json',
    '**/*.md',
    '**/*.config.*',
    '**/*.css',
    '**/*.svg',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { endOfLine: 'auto', singleQuote: true, quoteProps: 'consistent' },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'linebreak-style': ['error', 'windows'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ['error', 'always'],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
};
