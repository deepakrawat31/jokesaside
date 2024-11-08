import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const jokeTable = sqliteTable("jokes", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  joke: text().notNull(),
  userId: integer({ mode: "number" })
    .references(() => userTable.id, { onDelete: "cascade" })
    .notNull(),
  category: text().notNull(),
  createdAt: integer({ mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer({ mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export const userTable = sqliteTable("users", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  username: text().notNull(),
  email: text().notNull(),
  createdAt: integer({ mode: "timestamp" }).$defaultFn(() => new Date()),
  updatedAt: integer({ mode: "timestamp" })
    .$defaultFn(() => new Date())
    .$onUpdate(() => new Date()),
});

export type InsertUser = typeof userTable.$inferInsert;
export type InsertJoke = typeof jokeTable.$inferInsert;

export type SelectUser = typeof userTable.$inferSelect;
export type SelectJoke = typeof jokeTable.$inferSelect;
