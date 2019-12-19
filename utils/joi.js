// Joi 公共验证参数
const Joi = require('joi');

// 分页参数的校验
const paginationJoiDefine = {
    limit: Joi.number().integer().min(1).default(10).description('每页的条数'),
    page: Joi.number().integer().min(1).default(10).description('页码数'),
    pagination: Joi.boolean().description('是否启动分页，默认尾 true')
};


module.exports = {
    paginationJoiDefine
};
