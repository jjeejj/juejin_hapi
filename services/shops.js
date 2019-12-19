// 处理业务逻辑
const shopsDao = require('../dao/index.js').shopsDao;

/**
 * 获取全部的数据
 */
async function findAll() {
    let shopsList = await shopsDao.findAll();
    return shopsList;
};

/** */

async function findAllByCondition () {

}

module.exports = {
    findAll
};