const pgp = require("pg-promise")({});

const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
};

console.log(config);
module.exports = pgp(config);
