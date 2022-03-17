import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1647522526307 implements MigrationInterface {
    name = 'migration1647522526307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Supplier\` (\`id\` varchar(36) NOT NULL, \`firstName\` text NULL, \`lastName\` text NULL, \`email\` text NULL, \`password\` text NULL, \`deleted\` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX \`Supplier_id_UNIUQE\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`Supplier_id_UNIUQE\` ON \`Supplier\``);
        await queryRunner.query(`DROP TABLE \`Supplier\``);
    }

}
