const Koa = require('koa');
const app = new Koa();

const bodyParser = require('koa-bodyparser');

const api = require('./src/api');

app.use(bodyParser());
app.use(api.middleware());

app.listen(8080, () => {
    console.log('Open http://localhost:8080 and use')
    console.log(`
    // All Contacts
    GET http://localhost:8080/api/contacts
    
    // Create Contacts
    POST http://localhost:8080/api/contacts
    
    // Get Single Contact with id or phone number
    GET http://localhost:8080/api/contacts/:phoneOrId

    // Edit Contact
    PUT http://localhost:8080/api/contacts/:id
    
    // Delete Contact
    DELETE http://localhost:8080/api/contacts/:id
    `);
});