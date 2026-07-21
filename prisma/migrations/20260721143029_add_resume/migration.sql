/*
  Warnings:

  - You are about to drop the column `atsScore` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `extractedSkills` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Resume` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Resume` table. All the data in the column will be lost.
  - Added the required column `content` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileName` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Resume_userId_idx";

-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "atsScore",
DROP COLUMN "createdAt",
DROP COLUMN "extractedSkills",
DROP COLUMN "fileUrl",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "fileName" TEXT NOT NULL,
ADD COLUMN     "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
