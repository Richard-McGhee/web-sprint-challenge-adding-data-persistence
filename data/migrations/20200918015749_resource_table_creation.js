
exports.up = function(knex) {
  return knex.schema.createTable('resource', tbl => {
      tbl.increments()
      tbl.string('name', 128).unique().notNullable()
      tbl.string('description')
      tbl.integer('projectID', 255).unsigned().references('id').inTable('project').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resource')
};
