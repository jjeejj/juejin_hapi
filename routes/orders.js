const GROUP_NAME = 'orders';
const Joi = require('joi');

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}`,
        handler: (request, h) => {
            return "创建订单"
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '创建订单',
        },
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: (request, h) => {
            return "支付某条订单"
        },
        options: {
            tags: ['api', GROUP_NAME],
            description: '支付某条订单',
            validate: {
                params: {
                    orderId: Joi.string().required()
                }
            }
        },
    },
];