module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  plugins: ['import', 'prettier', 'react', 'react-hooks'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    semi: ['error', 'always'],
    'comma-dangle': 'off',
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'no-extra-parens': ['error', 'functions'],
    'react/display-name': [0, { ignoreTranspilerName: true }],
    'object-curly-spacing': [1, 'always'],
    'no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          { name: 'lodash', importNames: ['default'] },
          { name: 'lodash/fp', importNames: ['default'] },
          { name: '@material-ui/core', importNames: ['default'] },
          { name: '@material-ui/icons', importNames: ['default'] },
          {
            name: '@material-ui/styles',
            message:
              'Use @material-ui/core/styles instead of @material-ui/styles',
          },
        ],
      },
    ],
  },
  globals: {
    config: true,
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.13',
    },
    propWrapperFunctions: ['forbidExtraProps'],
    'import/resolver': {
      node: {
        paths: ['app'],
      },
    },
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"]
      }
    }
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
    },
  ],
};
