// swagger 插件
const inert = require('inert');
const vision = require('vision');
const package = require('package');
const hapiSwagger = require('hapi-swagger');

module.exports = [
    inert,
    vision,
    {
        plugin: hapiSwagger,
        options: {
            info: {
                title: "接口文档",
                version: package.version
            },
            grouping: 'tags',
            tags: [
                {
                    name: 'tests',
                    description: "测试相关"
                },
                {
                    name: 'shops',
                    description: "店铺相关"
                },
                {
                    name: 'orders',
                    description: "订单相关"
                }
            ]
        }
    }
];