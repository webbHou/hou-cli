'use strict';

/*
 * @Author: webbhou
 * @Date: 2020-12-05 11:34:31
 * @LastEditors: webbhou
 * @LastEditTime: 2021-03-12 15:18:23
 * @FilePath: /me/hou-cli/src/util/constants.js
 * @Description: 静态变量
 */
const { version } = require('../../package.json');

// 用户的根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

//当前 package.json 的版本号
const VERSION = version;

// 配置文件目录
const RC = `${HOME}/.hou`;

// RC 配置下载模板的地方，给 github 的 api 使用
// https://api.github.com/users/YvetteLau/repos
// https://api.github.com/${type}/${registry}/repos
// 模板下载地址可配置
const DEFAULTS = {
    registry: 'webbHou',
    type: 'users'
};

module.exports = {
    VERSION,
    RC,
    DEFAULTS
};