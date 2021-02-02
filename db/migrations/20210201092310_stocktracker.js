
exports.up = knex => {
  return Promise.all([
    knex.schema.createTable('user_data', t => {
      t.increments('id').primary()
      t.string('last_name').notNullable()
      t.string('first_name').notNullable()
      t.string('email').notNullable()
      t.string('api_key')

      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    }),

    knex.schema.createTable('market_data', t => {
      t.increments('id').primary()

      t.integer('user_data_id')
        .unsigned()
        .notNullable()
      t.foreign('user_data_id')
        .references('id')
        .inTable('user_data')

      t.string('ticker').notNullable()
      t.string('name')
      t.integer('shares')
      t.decimal('share_value')

      t.timestamp('created_at').defaultTo(knex.fn.now())
      t.timestamp('updated_at').defaultTo(knex.fn.now())
    }),
  ]);
};

exports.down = knex => {
  return Promise.all([
    knex.schema.dropTable('market_data'),
    knex.schema.dropTable('user_data')
  ]);
};
