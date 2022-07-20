module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['eslint-plugin-html', ],
  rules: {
    // override/add rules settings here, such as:
    'no-console': 'warn',
		'no-debugger': 'warn',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     bracketSpacing: true,
    //     semi: true,
    //     singleQuote: true,
    //     useTabs: false,
    //     trailingComma: 'none',
    //     tabWidth: 2,
    //     endOfLine: 'auto',
    //   },
    // ],

    // 'vue/no-unused-vars': 'error'

    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: [],
      },
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
      },
    ],

    // 'vue/require-prop-types': 'off',

    // "vue/max-attributes-per-line": ["error", {
    //   "singleline": {
    //     "max": 1
    //   },
    //   "multiline": {
    //     "max": 1
    //   }
    // }],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'beside', // "below"
      },
    ],
    // ,
    // 'vue/comment-directive': 'off',
    // overrides: [
    //   //   {
    //   //     files: ['*.vue'],
    //   //     parser: 'vue-eslint-parser',
    //   //     // parserOptions: {
    //   //     //   parser: '@typescript-eslint/parser',
    //   //     // },
    //   //     rules: {
    //   //       'no-unused-vars': 'off',
    //   //       'no-undef': 'off',
    //   //       // '@typescript-eslint/no-unused-vars': 'off',
    //   //     },
    //   //   },
    //   // {
    //   //   files: ['*.vue'],
    //   //   processor: 'vue/.vue',
    //   // },
    //   // {
    //   //   files: ['*.html'],
    //   //   rules: {
    //   //     // 'vue/comment-directive': ['error', 'off'],
    //   //     'vue/comment-directive': [
    //   //       'error',
    //   //       {
    //   //         reportUnusedDisableDirectives: false,
    //   //       },
    //   //     ],
    //   //   },
    //   // },
    // ],
  },
}
