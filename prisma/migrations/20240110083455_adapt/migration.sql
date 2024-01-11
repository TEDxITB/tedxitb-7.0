/*
  Warnings:

  - You are about to drop the column `affiliation` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `communityparticipation` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `hopes` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `major` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `motivation` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `phonenumber` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `photo_url` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `potentialstory` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `selfdescription` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `socialmedia` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `specialneeds` on the `Registration` table. All the data in the column will be lost.
  - Added the required column `address` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instance` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `q2` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `q3` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `q4` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "affiliation",
DROP COLUMN "communityparticipation",
DROP COLUMN "email",
DROP COLUMN "hopes",
DROP COLUMN "major",
DROP COLUMN "motivation",
DROP COLUMN "phonenumber",
DROP COLUMN "photo_url",
DROP COLUMN "potentialstory",
DROP COLUMN "selfdescription",
DROP COLUMN "socialmedia",
DROP COLUMN "specialneeds",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "faculty" TEXT,
ADD COLUMN     "instance" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "profile" TEXT NOT NULL,
ADD COLUMN     "q1" TEXT,
ADD COLUMN     "q2" TEXT NOT NULL,
ADD COLUMN     "q3" TEXT NOT NULL,
ADD COLUMN     "q4" TEXT NOT NULL,
ADD COLUMN     "q5" TEXT,
ADD COLUMN     "q6" TEXT,
ADD COLUMN     "social" TEXT NOT NULL;
