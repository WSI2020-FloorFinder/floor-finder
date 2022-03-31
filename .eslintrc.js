module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    camelcase: 'off',
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
  },
};
