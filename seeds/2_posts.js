
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'Puppies are cute!',
        photo: 'http://www.thelabradorsite.com/wp-content/uploads/2011/11/6-frequently-asked-questions-labrador-puppy-growth-e1416479421894.jpg',
        user_id: 1,
        body: 'Yay puppies! [Body]' },
        {title: 'I want a puppy',
        photo: 'https://www.askideas.com/media/79/Cute-Little-Australian-Shepherd-Puppy1.jpg',
        user_id: 2,
        body: 'More puppies!'},
        {title: 'Puppies are better than kittens',
        user_id: 3,
        body: 'Another body' }
      ]);
    });
};
