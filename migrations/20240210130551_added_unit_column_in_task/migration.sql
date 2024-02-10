/*
  Warnings:

  - Added the required column `unit` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('kg', 'sqft');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "unit" "Unit" NOT NULL;
