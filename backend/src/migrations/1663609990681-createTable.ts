import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1663609990681 implements MigrationInterface {
    name = 'createTable1663609990681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "created_at" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "created_at" TIMESTAMP NOT NULL`);
    }

}
