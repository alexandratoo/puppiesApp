
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Jen',
        photo: 'https://pbs.twimg.com/profile_images/3150189027/44bb5817c223e5f821f9cc1b5897fbd4_400x400.jpeg' },
        { name: 'Lauren' },
        { name: 'Tim' },
        { name: 'Megan' }
        // { name: 'John' }
      ]);
    });
};
