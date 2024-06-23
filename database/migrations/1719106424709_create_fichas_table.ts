import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fichas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome')
      table.string('raca')
      table.string('classe')
      table.integer('nivel')
      table.integer('status')
      table.integer('modificador')
      table.string('habilidade')
      table.string('itens')
      table.string('danos')


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}