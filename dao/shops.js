
// Shops 数据库操作方法
module.exports = function (Shops) {
    return {
        // 获取全部的记录
        async findAll() {
            return Shops.findAll({
                attributes: [
                    'id', 'name'
                ]
            });
        }
    }
};