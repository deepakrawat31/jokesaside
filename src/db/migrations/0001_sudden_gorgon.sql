DROP INDEX IF EXISTS "authenticator_credentialID_unique";--> statement-breakpoint
DROP INDEX IF EXISTS "user_email_unique";--> statement-breakpoint
ALTER TABLE `jokes` ALTER COLUMN "updated_at" TO "updated_at" integer DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
CREATE UNIQUE INDEX `authenticator_credentialID_unique` ON `authenticator` (`credentialID`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);