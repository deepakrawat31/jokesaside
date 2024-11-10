PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_jokes` (
	`id` text PRIMARY KEY NOT NULL,
	`joke` text NOT NULL,
	`user_id` text NOT NULL,
	`category` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`email`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_jokes`("id", "joke", "user_id", "category", "created_at", "updated_at") SELECT "id", "joke", "user_id", "category", "created_at", "updated_at" FROM `jokes`;--> statement-breakpoint
DROP TABLE `jokes`;--> statement-breakpoint
ALTER TABLE `__new_jokes` RENAME TO `jokes`;--> statement-breakpoint
PRAGMA foreign_keys=ON;