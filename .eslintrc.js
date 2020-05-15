module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js',
      },
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    },
    ],
  },
};
