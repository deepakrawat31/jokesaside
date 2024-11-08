import db from "..";
import { InsertJoke, InsertUser, jokeTable, userTable } from "../schema";

export async function createUser(data: InsertUser) {
  await db.insert(userTable).values(data);
}

export async function createJoke(data: InsertJoke) {
  await db.insert(jokeTable).values(data);
}
