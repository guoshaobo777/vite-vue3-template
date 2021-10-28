module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }]
    // 'import/no-extraneous-dependencies': [2, { devDependencies: true }]
    // 'import/no-unresolved': [2, { ignore: ['antd-mobile'] }]
  }
}
