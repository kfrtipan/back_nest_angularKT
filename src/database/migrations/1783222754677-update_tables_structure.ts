import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTablesStructure1783222754677 implements MigrationInterface {
    name = 'UpdateTablesStructure1783222754677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "nombre_completo" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "dni" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "UQ_251e72e84b60a37771db18f2c6d" UNIQUE ("dni")`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "telefono" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "fecha" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "estado" character varying(50) NOT NULL DEFAULT 'pendiente'`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD "observaciones" character varying(500)`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "precio" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "stock" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "image" character varying(500)`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "descripcion" character varying(500)`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "estado" character varying(50) NOT NULL DEFAULT 'activo'`);
        await queryRunner.query(`ALTER TABLE "role" ADD "detalle" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "nombre" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_7395ecde6cda2e7fe90253ec59f" UNIQUE ("mail")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_7395ecde6cda2e7fe90253ec59f"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "detalle" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "nombre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "detalle"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "descripcion"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "stock"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "precio"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "observaciones"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP COLUMN "fecha"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "UQ_251e72e84b60a37771db18f2c6d"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "dni"`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "nombre_completo"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "nombre" character varying NOT NULL`);
    }

}
