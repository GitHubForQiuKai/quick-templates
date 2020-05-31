module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [
    'vue'
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
      // allow debugger during development
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

      // allow async-await
      'generator-star-spacing': 'off',

      'vue/no-parsing-error': [2, {
        'x-invalid-end-tag': false
      }],

      // 标签自闭和
      'vue/html-self-closing': 'off',

      "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "never"
      }],

      // 属性换行
      "vue/max-attributes-per-line": ["error", {
        "singleline": 2,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }]
  }
};
