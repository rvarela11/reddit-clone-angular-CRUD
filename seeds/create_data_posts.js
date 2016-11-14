exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          title: 'Robert',
          author: 'Robert',
          description: 'Robert writing stuff.',
          votes: 0
        }),
        knex('posts').insert({
          title: 'Ale',
          author: 'Ale',
          description: 'Ale writing stuff.',
          votes: 0
        })
      ]);
    });
};
