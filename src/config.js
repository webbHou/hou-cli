/*
 * @Author: webbhou
 * @Date: 2020-12-05 11:33:38
 * @LastEditors: webbhou
 * @LastEditTime: 2020-12-05 11:36:18
 * @FilePath: /hou-cli/src/config.js
 * @Description: 
 */
// 管理 .eosrc 文件 (当前用户目录下)
const { get, set, getAll, remove } = require('./utils/rc');

let config = async (action, key, value) => {
    switch (action) {
        case 'get':
            if (key) {
                let result = await get(key);
                console.log(result);
            } else {
                let obj = await getAll();
                Object.keys(obj).forEach(key => {
                    console.log(`${key}=${obj[key]}`);
                })
            }
            break;
        case 'set':
            set(key, value);
            break;
        case 'remove':
            remove(key);
            break;
        default:
            break;
    }
}

module.exports = config;