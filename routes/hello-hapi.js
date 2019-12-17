module.exports = [
    {   
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return "hello hapi";
        },
        options: {
            tags: ['api', 'tests'],
            description: '测试hello-hapi'
        }
    }
];