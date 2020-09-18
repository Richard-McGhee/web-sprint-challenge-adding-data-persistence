
exports.up = function(knex) {
  return knex.schema.createTable('task', tbl => {
      tbl.increments()
      tbl.string('description').notNullable()
      tbl.string('notes')
      tbl.boolean('completed').defaultTo(false).notNullable()
      tbl.integer('projectID', 255).unsigned().references('id').inTable('project').unique().notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('task')
};
