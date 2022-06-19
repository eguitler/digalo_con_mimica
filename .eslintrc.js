const pkgJson = require('./package.json')

module.exports = {
  extends: [
    // 'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  env: {
    browser: true,
    jest: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      version: pkgJson.dependencies.react
    },
    "import/resolver": "webpack"
  },
  rules: {
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     args: 'after-used',
    //     ignoreRestSiblings: false,
    //     argsIgnorePattern: '^_$',
    //   },
    // ],
    // 'react/button-has-type': 'off',
    // 'react/jsx-filename-extension': 'off',
    // 'jsx-quotes': ['error', 'prefer-single'],
    // quotes: ['error', 'single'],
    // radix: 'off',
    // 'padded-blocks': 'off',
    // 'react/function-component-definition': 'off',
    // // 'import/no-unresolved': 'warn',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/jsx-props-no-spreading': 'off',
    // 'no-multiple-empty-lines': 'off',
    // 'linebreak-style': ['warn', 'unix'],
    // 'consistent-return': 'off',
    // 'import/prefer-default-export': 'off',
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],
  },
};
