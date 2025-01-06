ALTER TABLE "t3gallery_images" ALTER COLUMN "name" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "t3gallery_images" ADD COLUMN "url" varchar(1024) NOT NULL;