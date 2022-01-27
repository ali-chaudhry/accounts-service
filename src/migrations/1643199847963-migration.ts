import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1643199847963 implements MigrationInterface {
    name = 'migration1643199847963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ADD "token" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "token"`);
    }

}
