/*
  Warnings:

  - Changed the type of `phonenumber` on the `Registration` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "phonenumber",
ADD COLUMN     "phonenumber" INTEGER NOT NULL;
