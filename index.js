require('env2')('./.env')
const Hapi = require('hapi');
const config = require('./config/index.js');
const routesHelloApi = require('./routes/hello-hapi.js');
const routesShopsApi = require('./routes/shops.js');
const routesOrdersApi = require('./routes/orders.js');
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger.js');

const server = Hapi.Server(config);

const init = async () => {

    // 注册插件
    await server.register([
        ...pluginHapiSwagger
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