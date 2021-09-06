'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadLocal = undefined;

var _rc = require('./rc');

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: webbhou
 * @Date: 2020-12-05 11:34:16
 * @LastEditors: webbhou
 * @LastEditTime: 2021-03-12 10:51:26
 * @FilePath: /me/hou-cli/src/util/get.js
 * @Description: 获取模版项目
 */
const downloadLocal = exports.downloadLocal = async (templateName, projectName) => {
    let config = await (0, _rc.getAll)();
    let api = `${config.registry}/${templateName}`;
    return new Promise((resolve, reject) => {
        //projectName 为下载到的本地目录
        (0, _downloadGitRepo2.default)(api, projectName, err => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};