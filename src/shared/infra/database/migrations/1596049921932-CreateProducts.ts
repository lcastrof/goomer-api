import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProducts1596049921932 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 5,
            scale: 2,
          },
          {
            name: 'category',
            type: 'varchar',
          },
          {
            name: 'promotion',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'promotion_description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'promotion_price',
            type: 'decimal',
            precision: 5,
            scale: 2,
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'TIMESTAMP',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMP',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
