/*
  Warnings:

  - You are about to drop the column `status` on the `Jobs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "status" "Status" DEFAULT 'pending';
