module.exports = {
  extends: [
    'plugin:react/recommended',
    '@mussi/eslint-config-ts',
  ],
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
  },
}
