-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "q1" INTEGER NOT NULL,
    "q2" TEXT NOT NULL,
    "q3" TEXT NOT NULL,
    "q4" TEXT NOT NULL,
    "q5" TEXT NOT NULL,
    "q6" TEXT NOT NULL,
    "q7" TEXT[],

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
