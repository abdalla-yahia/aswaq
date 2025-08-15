/*
  Warnings:

  - Added the required column `userId` to the `Addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Addresses" DROP CONSTRAINT "Addresses_id_fkey";

-- AlterTable
ALTER TABLE "public"."Addresses" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Addresses" ADD CONSTRAINT "Addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
