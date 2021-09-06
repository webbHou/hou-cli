/*
 * @Author: webbhou
 * @Date: 2020-12-05 11:34:53
 * @LastEditors: webbhou
 * @LastEditTime: 2021-03-12 10:57:21
 * @FilePath: /me/hou-cli/src/util/rc.js
 * @Description: 公共命令方法
 */
const { RC, DEFAULTS } = require('./constants');
const { decode, encode } = require('ini');
const { promisify } = require('util');
const chalk = require('chalk');
const fs = require('fs');

const exits = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

//RC 是配置文件
//DEFAULTS 是默认的配置
const get = async (key) => {
    const exit = await exits(RC);
    let opts;
    if (exit) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        return opts[key];
    }
    return '';
}

//获取模版配置
const getAll = async () => {
    const exit = await exits(RC);
    let opts;
    if (exit) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        return opts;
    }
    return {};
}

//设置模版
const set = async (key, value) => {
    const exit = await exits(RC);
    let opts;
    if (exit) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        if(!key) {
            console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'));
            return;
        }
        if(!value) {
            console.log(chalk.red(chalk.bold('Error:')), chalk.red('value is required'));
            return;
        }
        Object.assign(opts, { [key]: value });
    } else {
        if(!key) {
            console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'));
            return;
        }
        if(!value) {
            console.log(chalk.red(chalk.bold('Error:')), chalk.red('value is required'));
            return;
        }
        opts = Object.assign(DEFAULTS, { [key]: value });
    }
    await writeFile(RC, encode(opts), 'utf8');
}

//移除模版
const remove = async (key) => {
    const exit = await exits(RC);
    let opts;
    if (exit) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        delete opts[key];
        await writeFile(RC, encode(opts), 'utf8');
    }
}

module.exports = {
    remove,
    set,
    getAll,
    get
}