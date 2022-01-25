import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1643123340097 implements MigrationInterface {
    name = 'migration1643123340097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" text, "lastName" text, "email" text, "password" text, "deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "User_id_UNIUQE" ON "User" ("id") WHERE deleted=true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."User_id_UNIUQE"`);
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
