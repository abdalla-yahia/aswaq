/*
  Warnings:

  - You are about to drop the column `dateofbirth` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "dateofbirth",
ADD COLUMN     "birthDate" TIMESTAMP(3);
