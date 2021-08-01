module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    semi: ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
