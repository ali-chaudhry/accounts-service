import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1647522731359 implements MigrationInterface {
    name = 'migration1647522731359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" text, "lastName" text, "email" text, "password" text, "deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "user_id_unique" ON "User" ("id") WHERE deleted=true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."user_id_unique"`);
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
