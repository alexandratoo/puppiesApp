
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments()
      table.text('name').notNullable()
      table.text('photo').defaultTo('http://www.webtutorialspoint.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png')
    })
};

exports.down = function(knex) {
return knex.schema.dropTable('users');
};
