
exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
      table.increments()
      table.text('title').notNullable()
      table.integer('user_id').notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      table.text('body').notNullable()
      table.text('photo').defaultTo('https://img.clipartfest.com/122f041c132fcd7ea78673495b1f0e15_puppy-cute-puppies-dog-cartoon-cartoon-puppy-clipart_600-600.png')
      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
return knex.schema.dropTable('posts');
};
