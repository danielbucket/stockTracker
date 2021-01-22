
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('user_data').del()
    .then(() => {
      // Inserts seed entries
      return knex('user_data').insert([
        {
          id: 1,
          name: 'Bucket',
          email: 'danielludwick@gmail.com',
          api_key: 'N2Fpqbi1pAyG73Lu7pdlDEZPf19OVd_b'
        },
        {
          id: 2,
          name: 'defaultUser2',
          email: 'default1User2@mail.com',
        },
        {
          id: 3,
          name: 'defaultUser3',
          email: 'defaultUser3@mail.com',
        }
      ]);
    });
};
