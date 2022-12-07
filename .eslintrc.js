module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'no-console': 0,
  },
  globals: {
    TrelloPowerUp: true,
  },
};
