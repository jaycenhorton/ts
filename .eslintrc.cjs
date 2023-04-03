const { parserOptions } = require('@nori-dot-com/eslint-config-nori/rules');

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: '@nori-dot-com/eslint-config-nori',
  parserOptions: parserOptions({
    typescript: true,  
    dir: __dirname, 
    react: false, 
  }),
};   

module.exports = config;