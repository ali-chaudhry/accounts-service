import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1647578174647 implements MigrationInterface {
  name = 'migration1647578174647';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Admin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" text, "lastName" text, "email" text, "password" text, "deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_3a489f4a44372ff150d7924dc3d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "admin_id_unique" ON "Admin" ("id") WHERE deleted=true`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."admin_id_unique"`);
    await queryRunner.query(`DROP TABLE "Admin"`);
  }
}
