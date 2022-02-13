import {MigrationInterface, QueryRunner} from "typeorm";

export class ItemData1644081717284 implements MigrationInterface {
    name = 'ItemData1644081717284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "Photo"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "Photo" "public"."account_photo_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "Photo"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "Photo" account_photo_enum`);
    }

}
