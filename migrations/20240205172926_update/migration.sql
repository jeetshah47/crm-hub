/*
  Warnings:

  - The `priority` column on the `Jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'inprogress', 'inreview', 'done');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('high', 'medium', 'low');

-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "priority",
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'low',
DROP COLUMN "status",
ADD COLUMN     "status" "Status" DEFAULT 'pending';

-- CreateTable
CREATE TABLE "RemainderPayments" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,

    CONSTRAINT "RemainderPayments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RemainderPayments" ADD CONSTRAINT "RemainderPayments_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
