'use strict';

const program = require('commander');
const { VERSION } = require('./utils/constants');
const apply = require('./index');
const chalk = require('chalk');

/**
 * eos commands
 *    - config
 *    - init 
 */

let actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: ['hou init templateName projectName']
    },
    config: {
        alias: 'cfg',
        description: 'config .hou',
        usages: ['hou config set <k> <v>', 'hou config get <k>', 'hou config remove <k>']

    }
    //other commands
};

Object.keys(actionMap).forEach(action => {
    program.command(action).description(actionMap[action].description)
    // .alias(actionMap[action].alias) //别名
    .action(() => {
        switch (action) {
            case 'config':
                //配置
                apply(action, ...process.argv.slice(3));
                break;
            case 'init':
                apply(action, ...process.argv.slice(3));
                break;
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach(action => {
        actionMap[action].usages.forEach(usage => {
            console.log('  - ' + usage);
        });
    });
    console.log('\r');
}

program.usage('<command> [options]');
program.on('-h', help);
program.on('--help', help);
program.version(VERSION).parse(process.argv);

// eos 不带参数时
if (!process.argv.slice(2).length) {
    program.outputHelp(make_green);
}
function make_green(txt) {
    return chalk.green(txt);
}