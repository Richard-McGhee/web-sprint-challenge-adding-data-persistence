
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
      tbl.string('description')
      tbl.boolean('completed').defaultTo(false).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project')
};
