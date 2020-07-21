
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Yllan', email: 'the_yllan@hotmail.com', password: '1111' },
        { name: 'Otávio', email: 'otaviobruno@yahoo.com.br', password: '2222' },
        { name: 'Arthur', email: 'arthurhgr@gmail.com', password: '3333' }
      ]);
    });
};
