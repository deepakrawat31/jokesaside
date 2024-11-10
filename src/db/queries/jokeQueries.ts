"use server";

import { eq } from "drizzle-orm";
import db from "..";
import { jokes } from "../schema";

export async function insertJoke(data: {
  joke?: string;
  userId?: string | null;
  category?: string;
}) {
  const { joke, userId, category } = data;
  if (!joke || !userId || !category) {
    throw new Error("Missing required fields: joke, userEmail, or category");
  }
  await db.insert(jokes).values({
    joke,
    userId,
    category,
  });
}

export async function deleteJoke(id: string) {
  await db.delete(jokes).where(eq(jokes.id, id));
}
