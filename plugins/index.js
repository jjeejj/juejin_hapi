'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

// 插件数组
let plugins = [];
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let plguin = require(path.join(__dirname, file));
    if (plguin instanceof Array == true) { // 导出可能是多个插件
        plugins.push(...plguin);
    } else {
        plugins.push(plguin)
    };
  });


module.exports = plugins;
