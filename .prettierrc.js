// https://prettier.io/docs/en/options.html

module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  singleAttributePerLine: true,
  trailingComma: false,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.test.js',
      options: {
        semi: true,
      },
    },
  ],
}
