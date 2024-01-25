/*
  Warnings:

  - You are about to drop the column `confirmedat` on the `Confirmation` table. All the data in the column will be lost.
  - You are about to drop the column `madeat` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Confirmation" DROP COLUMN "confirmedat",
ADD COLUMN     "confirmedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "madeat",
ADD COLUMN     "madeAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
