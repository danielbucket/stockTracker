const path = require('path');

module.exports = {
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/stocktracker',
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, './db/migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, './db/seeds/test'),
    },
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/stocktracker',
    searchPath: ['knex', 'public'],
    useNullAsDefault: true,
    migrations: {
      tableName: 'stocktracker',
      directory: path.resolve(__dirname, './db/migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, './db/seeds/dev'),
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '$ssl=true',
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, './db/migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, './db/seeds/dev'),
    },
  },
};