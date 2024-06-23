import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'atributos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('ficha_id').unsigned().references('id').inTable('fichas').onDelete('CASCADE')
      table.integer('forca')
      table.integer('desteza')
      table.integer('constituicao')
      table.integer('inteligencia')
      table.integer('sabedoria')
      table.integer('carisma')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}