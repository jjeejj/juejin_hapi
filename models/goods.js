/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('goods', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'id'
        },
        shopId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'shop_id'
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'name'
        },
        thumbUrl: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'thumb_url'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at'
        }
    }, {
        tableName: 'goods'
    });
};
