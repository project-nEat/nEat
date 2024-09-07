const { Pool } = require('pg');

const PG_URI = 'postgres://hegbgbuw:TSie13wKBKQJ-Epdtr7_z6Au2z-IEqV_@raja.db.elephantsql.com/hegbgbuw';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
