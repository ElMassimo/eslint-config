module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@mussi/eslint-config-ts',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'vue/attribute-hyphenation': ['warn', 'never', {
      ignore: [
        'stroke-dasharray',
        'stroke-width',
      ],
    }],
    'vue/html-closing-bracket-spacing': ['warn', {
      selfClosingTag: 'never',
    }],
    'vue/max-attributes-per-line': ['warn', {
      singleline: 5,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 0,
  },
}
