import JokeGrid from "@/components/JokeGrid";

import db from "@/db";
import { jokes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { auth } from "../../auth";

export default async function ProfilePage() {
  const session = await auth();

  const userEmail = session?.user?.email;
  if (!userEmail) {
    redirect("/nosession");
  }
  const data = await db.select().from(jokes).where(eq(jokes.userId, userEmail));

  return <main>{<JokeGrid data={data} />}</main>;
}
