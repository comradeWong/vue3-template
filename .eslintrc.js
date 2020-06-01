/*
 * @Descripttion: 
 * @version: 
 * @Author: jooey wong
 * @Date: 2020-06-01 11:27:22
 * @LastEditors: jooey wong
 * @LastEditTime: 2020-06-01 13:44:57
 */ 
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
