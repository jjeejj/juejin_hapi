// 分页的插件
const hapiPagination = require('hapi-pagination');

module.exports = {
    plugin: hapiPagination,
    name: '分页插件',
    options: {
        routes: {
            include: ['/shops'],
            exclude: []
        }
    }
}
