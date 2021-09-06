/*
 * @Author: webbhou
 * @Date: 2020-12-05 11:34:16
 * @LastEditors: webbhou
 * @LastEditTime: 2021-03-12 10:51:26
 * @FilePath: /me/hou-cli/src/util/get.js
 * @Description: 获取模版项目
 */
const { getAll } = require('./rc');
const downloadGit = require('download-git-repo');

const downloadLocal = async (templateName, projectName) => {
    let config = await getAll();
    return new Promise((resolve, reject) => {
        if(!config[templateName]) reject('模板不存在')
        let api = `${config.registry}/${config[templateName]}`;
        //projectName 为下载到的本地目录
        downloadGit(api, projectName, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

module.exports = {
    downloadLocal 
}