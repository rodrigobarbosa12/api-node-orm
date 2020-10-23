import {
    MigrationInterface,
    QueryRunner,
    Table
} from "typeorm";

export class createSkills1603386619208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'skills',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'skill',
                    type: 'varchar',
                },
                {
                    name: 'users_id',
                    type: 'integer'
                },
            ],
            foreignKeys: [
                {
                    name: 'skillsUsers', // nome para identificar a chave
                    columnNames: ['users_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('skills');
    }

}
