const GROUP_NAME = 'shops';
const Joi = require('joi');
const shopsHandle = require('../services/shops.js');
const { paginationJoiDefine } = require('../utils/joi.js');

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, h) => {
            return await shopsHandle.findAll(request, h)
        },
        options: {
            tags: ['api', GROUP_NAME],
            auth: false,
            description: '获取店铺列表',
            validate: {
                query: {
                    ...paginationJoiDefine
                }
            },
            response: {
                status: {
                    400: Joi.any().description('客户端请求错误')
                }
            }
        },
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: () => {
            return "获取店铺的商品列表"
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺的商品列表',
        },
    },
    
]