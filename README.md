# phone-rest

This is a rest api for managing contacts using Koa.js.

## How to set up

- Set up the table in a MySql Database using the `table.sql` file
- Copy `.env.example` file and paste it as `.env`. Then update the values for your MySql database connection.
- Run `npm i`
- Run `npm start`

## How to use

These are the routes available and how to use them:

- `GET` http://localhost:8080/api/contacts (Get all contacts)
- `GET` http://localhost:8080/api/contacts/:phoneOrId (Get Single contact with phone or id)
- `POST` http://localhost:8080/api/contacts (Create a new contact with JSON body { "name": String, "phone": String(Valid BD phone Format: 01XXXXXXXXX) })
- `PUT` http://localhost:8080/api/contacts/:id (Update contact with id. "name" or "phone" or both can be provided)
- `DELETE` http://localhost:8080/api/contacts/:id (Delete Contact with id)