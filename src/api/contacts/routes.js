const repository = require('./repository');

module.exports = (api) => {
    api.resource('contacts', repository);
    return api;
}