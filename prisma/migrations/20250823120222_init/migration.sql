-- CreateTable
CREATE TABLE "public"."ConsultingFormSubmission" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "topics" TEXT NOT NULL,
    "lineAccount" TEXT,
    "occupation" TEXT NOT NULL,
    "howDidYouKnow" TEXT NOT NULL,
    "date1" TIMESTAMP(3) NOT NULL,
    "time1" TEXT NOT NULL,
    "date2" TIMESTAMP(3) NOT NULL,
    "time2" TEXT NOT NULL,
    "date3" TIMESTAMP(3) NOT NULL,
    "time3" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "ConsultingFormSubmission_pkey" PRIMARY KEY ("id")
);
