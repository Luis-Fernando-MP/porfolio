/*
  Warnings:

  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mark` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `View` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_markId_fkey";

-- DropForeignKey
ALTER TABLE "View" DROP CONSTRAINT "View_markId_fkey";

-- DropTable
DROP TABLE "Like";

-- DropTable
DROP TABLE "Mark";

-- DropTable
DROP TABLE "View";

-- CreateTable
CREATE TABLE "markdowns" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "markdowns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "markId" TEXT,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "views" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "markId" TEXT,

    CONSTRAINT "views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "markdowns_slug_key" ON "markdowns"("slug");

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_markId_fkey" FOREIGN KEY ("markId") REFERENCES "markdowns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "views" ADD CONSTRAINT "views_markId_fkey" FOREIGN KEY ("markId") REFERENCES "markdowns"("id") ON DELETE CASCADE ON UPDATE CASCADE;
