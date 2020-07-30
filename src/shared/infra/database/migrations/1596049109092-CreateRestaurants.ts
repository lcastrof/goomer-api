import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRestaurants1596049109092
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'restaurants',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'photo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'JSON',
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
    await queryRunner.dropTable('restaurants');
  }
}
