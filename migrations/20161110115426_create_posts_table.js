exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("posts", function(table) {
    table.increments().primary();
    table.text("title");
    table.text("author");
    table.text("description");
    table.integer("votes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

// exports.up = function(knex, Promise) {
//   return knex.schema.createTableIfNotExists("posts", function(table) {
//     table.increments().primary();
//     table.text("title");
//     table.text("body");
//     table.bigInteger("user_id").unsigned().index().references('id').inTable(
//       'users').onDelete('cascade');
//   });
// };
//
// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('posts');
// };
