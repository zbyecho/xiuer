/*
 * @Date: 2021-05-06 16:47:31
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2021-05-06 16:57:02
 * @FilePath: /my-app/vue.config.js
 */
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/xiuer/'
      : '/',
    outputDir: 'docs'
  }
  