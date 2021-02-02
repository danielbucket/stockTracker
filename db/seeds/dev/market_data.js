
exports.seed = function(knex) {
  return knex('market_data').del()
    .then(function () {
      return knex('market_data').insert([
        {
          id: 1,
          user_data_id: 1,
          ticker: 'O',
          name: 'Realty Income',
          shares: 18,
          share_value: 57.92,
        },
        {
          id: 2,
          user_data_id: 1,
          ticker: 'NRZ',
          name: 'New Residential Investment',
          shares: 100,
          share_value: 9.59,
        },
        {
          id: 3,
          user_data_id: 1,
          ticker: 'T',
          name: 'AT&T',
          shares: 25,
          share_value: 29.54,
        }
      ]);
    });
};
