import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jogadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome').notNullable()
      table
        .integer('campanha_id')
        .unsigned()
        .references('id')
        .inTable('campanhas')
        .onDelete('CASCADE')

      table.integer('ficha_id')
        .unsigned()
        .references('id')
        .inTable('fichas')
        .onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}