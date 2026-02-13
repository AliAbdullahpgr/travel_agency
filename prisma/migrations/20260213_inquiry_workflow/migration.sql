-- CreateEnum
CREATE TYPE "InquiryStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Inquiry"
ADD COLUMN "email" TEXT,
ADD COLUMN "city" TEXT,
ADD COLUMN "country" TEXT,
ADD COLUMN "duration" TEXT,
ADD COLUMN "departureCity" TEXT,
ADD COLUMN "tourCategory" "TourCategory",
ADD COLUMN "adults" INTEGER,
ADD COLUMN "children" INTEGER,
ADD COLUMN "notes" TEXT,
ADD COLUMN "status" "InquiryStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN "reviewedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Inquiry_status_createdAt_idx" ON "Inquiry"("status", "createdAt");
