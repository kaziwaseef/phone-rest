module.exports = {
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: parseInt(process.env.DB_PORT) || 3306,
    dbUser: process.env.DB_USER || 'root',
    dbPass: process.env.DB_PASS || null,
    dbDatabase: process.env.DB_DATABASE || 'test'
}