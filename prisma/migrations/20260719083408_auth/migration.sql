/*
  Warnings:

  - Added the required column `updatedAt` to the `Interview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Interview" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Question" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Resume" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "public"."Account"("userId");

-- CreateIndex
CREATE INDEX "Interview_userId_idx" ON "public"."Interview"("userId");

-- CreateIndex
CREATE INDEX "Question_interviewId_idx" ON "public"."Question"("interviewId");

-- CreateIndex
CREATE INDEX "Resume_userId_idx" ON "public"."Resume"("userId");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "public"."Session"("userId");
