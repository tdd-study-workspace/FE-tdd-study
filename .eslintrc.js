module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:storybook/recommended',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'qw
  },
  ignorePatterns: ['components.d.ts', 'auto-imports.d.ts'],
};
