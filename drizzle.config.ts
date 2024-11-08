import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  dialect: "turso",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL!,
    authToken: process.env.NEXT_PUBLIC_DATABASE_AUTH_TOKEN!,
  },
  casing: "snake_case",
});
