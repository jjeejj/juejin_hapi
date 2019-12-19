const { shops } = require('../models/index.js');

module.exports = {
    // shops 相关的
    shopsDao: require('./shops.js')(shops)
};
