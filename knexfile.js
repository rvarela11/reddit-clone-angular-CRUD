'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'rca2-dev'
    }
  },
  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL'
  }


};
