"use strict";

/*
 * @Author: webbhou
 * @Date: 2020-12-05 11:33:34
 * @LastEditors: webbhou
 * @LastEditTime: 2021-03-12 15:15:53
 * @FilePath: /me/hou-cli/src/index.js
 * @Description: 
 */
// 主的流程控制
let apply = (action, ...args) => {
  //babel-env
  require(`./${action}`)(...args);
};

module.exports = apply;