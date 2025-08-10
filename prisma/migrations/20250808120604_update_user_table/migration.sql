-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "status" "public"."Status" DEFAULT 'ACTIVE';
