/*
  Warnings:

  - You are about to drop the column `enable` on the `Feature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Feature` DROP COLUMN `enable`,
    ADD COLUMN `enabled` BOOLEAN NOT NULL DEFAULT false;
