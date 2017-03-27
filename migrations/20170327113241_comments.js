
exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
      table.increments()
      table.integer('user_id').notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      table.integer('post_id').notNullable()
      .references('id')
      .inTable('posts')
      .onDelete('CASCADE')
      table.text('body').notNullable()
      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
return knex.schema.dropTable('comments');
};
