exports.up = (knex, Promise) => {
	console.log('Promise: ', new Promise.all(['1','2']) )
	  return knex.schema.createTable('user_data', table => {
			table.increments('id').primary()
			table.string('name').notNullable()
			table.string('email').notNullable()
			table.string('api_key')

			table.timestamp('created_at').defaultTo(knex.fn.now())
			table.timestamp('updated_at').defaultTo(knex.fn.now())
		}),

		knex.schema.createTable('market_data', table => {
			table.increments('id').primary()
			table.integer('user_data_id')
			table.foreign('user_data_id').references('id').inTable('user_data')
			table.string('ticker').notNullable()
			table.string('name')
			table.integer('shares')
			table.decimal('share_value')

			table.timestamp('created_at').defaultTo(knex.fn.now())
			table.timestamp('updated_at').defaultTo(knex.fn.now())
		})
};

exports.down = knex => {
  return knex.schema.dropTable('market_data').dropTable('user_data');
};

