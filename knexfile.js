// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'teste_estagio', //Digite aqui o nome do database a ser utilizado
      user: 'postgres', //Digite aqui o seu usúario do banco
      password: '0000' //Digite aqui a sua senha do banco
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
