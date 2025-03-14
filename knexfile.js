/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      port: 3000,  
      user: 'postgres',  
      password: 'postgres',  
      database: 'mydatabase'  
    }
  
  }
};