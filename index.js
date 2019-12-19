require('env2')('./.env')
const Hapi = require('hapi');
const config = require('./config/index.js');
const routesHelloApi = require('./routes/hello-hapi.js');
const routesShopsApi = require('./routes/shops.js');
const routesOrdersApi = require('./routes/orders.js');
// 引入自定义的 插件配置
const plugins = require('./plugins/index.js');

const server = Hapi.Server(config);

const init = async () => {

    // 注册插件
    await server.register([
        ...plugins
    ]);

    // 路由
    server.route([
        ...routesHelloApi,
        ...routesShopsApi,
        ...routesOrdersApi
    ]);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();

process.on('unHandledRejection', () => {
    console.log(err);
    process.exit(1);
});