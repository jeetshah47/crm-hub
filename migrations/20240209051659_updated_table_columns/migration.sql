/*
  Warnings:

  - You are about to drop the column `Amount` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the `RemainderPayments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RemainderPayments" DROP CONSTRAINT "RemainderPayments_paymentId_fkey";

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "Amount",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "RemainderPayments";

-- CreateTable
CREATE TABLE "PaymentRemainders" (
    "id" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentRemainders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PaymentRemainders" ADD CONSTRAINT "PaymentRemainders_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
