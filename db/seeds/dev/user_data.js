
exports.seed = function(knex) {
  return knex('user_data').del()
    .then(function () {
      return knex('user_data').insert([
        {
          id: 1,
          last_name: 'bucket',
          first_name: 'daniel',
          email: 'danieljbucket@gmail.com',
          api_key: 'N2Fpqbi1pAyG73Lu7pdlDEZPf19OVd_b',
        },
        {
          id: 2,
          last_name: 'user_2_last',
          first_name: 'user_2_first',
          email: 'default1User2@mail.com',
          api_key: 'akdhfaksudfalkbdsuygkfas',
        },
        {
          id: 3,
          last_name: 'user_3_last',
          fist_name: 'user_3_first',
          email: 'defaultUser3@mail.com',
          api_key: 'aidhf3ajhfdlgahdflausl',
        },
      ]);
    });
};
