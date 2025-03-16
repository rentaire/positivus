/** @type {import('prettier').Config} */
export default {
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 100,
  endOfLine: 'auto',
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
};
