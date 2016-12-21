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
    connection: 'postgres://qojajuwiajalbr:5aa9d41d02fc39d164cbb52082d95b24e4a427c471dc4cdf5c1c5c40fe2783f7@ec2-184-72-246-219.compute-1.amazonaws.com:5432/d1s30r3e2bll2n'
  }


};
