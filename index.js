const ERROR = 'error';
const OFF = 'off';

module.exports = {
  parser: 'babel-eslint',

  plugins: ['import', 'prettier'],

  settings: {
    'import/resolver': 'node'
  },

  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],

  rules: {
    'arrow-body-style': [ERROR, 'as-needed'],
    'import/no-unresolved': [ERROR, {commonjs: true}],
    'import/no-named-as-default': OFF,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: ['**/__testUtils__/**/*.js', '**/__tests__/*-test.js']
      }
    ],
    'import/order': [
      ERROR,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'no-var': ERROR,
    'no-unneeded-ternary': ERROR,
    'no-restricted-syntax': [
      ERROR,
      {
        selector: 'ForInStatement',
        message:
          'for … in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries} and iterate over the resulting array. Iteration based on arrays usually shows the intent of the loop clearer and works better with chaining. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods'
      },
      {
        selector: 'ForOfStatement',
        message:
          'for … of loops should be avoided in favor of array iteration methods. Iteration based on arrays usually shows the intent of the loop clearer and works better with chaining. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods'
      }
    ],
    'object-shorthand': ERROR,
    'prefer-const': ERROR,
    'prettier/prettier': [ERROR, {singleQuote: true, bracketSpacing: false}],
    'valid-jsdoc': [
      ERROR,
      {
        prefer: {
          returns: 'return'
        },
        preferType: {
          array: 'Array',
          boolean: 'Boolean',
          function: 'Function',
          number: 'Number',
          object: 'Object',
          any: '*',
          Any: '*',
          Undefined: 'undefined',
          Null: 'null'
        },
        requireReturn: false,
        requireReturnType: false,
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ]
  }
};
