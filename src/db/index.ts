import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

config({ path: ".env" });

const db = drizzle({
  connection: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL!,
    authToken: process.env.NEXT_PUBLIC_DATABASE_AUTH_TOKEN!,
  },
  casing: "snake_case",
  schema,
});

export default db;
