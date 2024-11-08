CREATE TABLE `jokes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`joke` text NOT NULL,
	`user_id` integer NOT NULL,
	`category` text NOT NULL,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
