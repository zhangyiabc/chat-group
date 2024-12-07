module.exports = {
  env: {
    es6: true,
    node: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'eol-last': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single'], 
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'react-hooks/rules-of-hooks': 'error',    // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn',    // 检查 effect 的依赖
  }
}
