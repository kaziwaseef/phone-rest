const db = require('../../plugins/database');
const isValidPhone = require('../../utils/isValidPhone');

module.exports = {
    *index() {
        try {
            const rows = yield db.query("SELECT * FROM `contacts`");
            this.body = rows;
        }
        catch (err) {
            console.error(err);
            this.response.status = 500;
        }
    },
    *show() {

        try {

            const { contact } = this.params;

            let query;

            if (isValidPhone(contact)) {
                query = 'phone = ?'
            }
            else {
                query = 'id = ?'
            }

            const rows = yield db.query(`SELECT * FROM \`contacts\` WHERE ${query}`, [contact]);

            if (rows[0]) {
                this.body = rows[0];
            }
            else {
                this.response.status = 404;
            }
        }
        catch (err) {
            console.error(err);
            this.response.status = 500;
        }
    },
    *create() {

        try {
            // Check if number is unique
            const { name, phone } = this.request.body;

            if (!name) {
                this.response.status = 400;
                this.response.message = 'The field "name" is mandatory';
                return;
            }
            if (!phone || !isValidPhone(phone)) {
                this.response.status = 400;
                this.response.message = 'The field "phone" must be a valid Bangladeshi phone number';
                return;
            }
            const rows = yield db.query('INSERT INTO `contacts` (name, phone) VALUES (?,?)', [name, phone]);
            this.body = rows;
        }
        catch (err) {
            console.error(err);

            if (err.code === 'ER_DUP_ENTRY') {
                this.response.status = 400;
                this.response.message = `The "phone": ${this.request.body.phone} already exists`;
                return;
            }

            this.response.status = 500;
        }
    },
    *update() {

        try {
            const { contact } = this.params;
            const { name, phone } = this.request.body;

            if (phone && !isValidPhone(phone)) {
                this.response.status = 400;
                this.response.message = 'The field "phone" must be a valid Bangladeshi phone number';
                return;
            }

            let query, params;

            if (name && phone) {
                query = '`name`=?,`phone`=?';
                params = [name, phone, parseInt(contact)];
            }
            else if (name) {
                query = '`name`=?';
                params = [name, parseInt(contact)];
            }
            else if (phone) {
                query = '`phone`=?';
                params = [phone, parseInt(contact)];
            }
            else {
                this.response.status = 400;
                this.response.message = 'The fields "name" and/or "phone" must be present';
                return;
            }

            const rows = yield db.query(`UPDATE \`contacts\` SET ${query} WHERE id = ?`, params);
            this.body = rows;
        }
        catch (err) {
            console.error(err);
            this.response.status = 500;
        }
    },
    *remove() {

        try {
            const { contact } = this.params;
            const rows = yield db.query("DELETE FROM `contacts` WHERE id = ?", [contact]);
            this.body = rows;
        }
        catch (err) {
            console.error(err);
            this.response.status = 500;
        }
    }
}