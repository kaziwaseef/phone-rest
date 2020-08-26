const mysql = require('koa-mysql');
const config = require('../../config');

const db = mysql.createPool({
    host: config.dbHost,
    port: config.dbPort,
    user: config.dbUser,
    password: config.dbPass,
    database: config.dbDatabase
});

module.exports = db;