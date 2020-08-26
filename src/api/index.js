const Router = require('koa-rest-router');
const api = Router({ prefix: '/api' });

/*
    TODO: Have a system which can dynamically take all the api resources
    and merge into one api to export
*/

module.exports = require('./contacts/routes')(api);