const{Pool} = require("pg");

const pool=new Pool({

  host: 'localhost',
  user: 'postgres',
  password: 'Gamigio2500',
  database: 'pruebaTecnica',
  port: 5432,

});

module.exports = pool; 