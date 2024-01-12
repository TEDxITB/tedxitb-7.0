/*
  Warnings:

  - A unique constraint covering the columns `[confirmationId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `confirmationId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "confirmationId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_confirmationId_key" ON "Ticket"("confirmationId");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_confirmationId_fkey" FOREIGN KEY ("confirmationId") REFERENCES "Confirmation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
