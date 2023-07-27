module.exports = {
  extends: 'next/core-web-vitals',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-misused-promises': 0,
    'global-require': 0,
  },
};
