"use client";

import { deleteJoke } from "@/db/queries/jokeQueries";
import { ArrowClockwise, Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";

export default function JokeGrid({
  data,
}: {
  data: {
    id: string;
    joke: string;
    userId: string;
    category: string;
    createdAt: string;
    updatedAt: Date | null;
  }[];
}) {
  const [isPending, setIsPending] = useState(false);

  return (
    <div className="grid flex-1 grid-cols-1 gap-2 text-neutral-300 md:grid-cols-3">
      {data.map((joke) => (
        <div
          className="motion-preset-slide-up flex flex-col justify-between gap-4 rounded-md bg-neutral-900 p-4 font-semibold ring-1 ring-neutral-600/60 motion-ease-spring-snappy"
          key={joke.id}
        >
          <p>{joke.joke}</p>
          <span className="flex items-center justify-between gap-4">
            <p className="w-fit rounded-md bg-neutral-800 px-3 py-1.5 text-sm">
              #{joke.category}
            </p>

            <button
              className={`w-fit self-end rounded-md bg-neutral-800 p-2 ring-1 ring-neutral-600/60 ${isPending ? "" : "md:hover:motion-preset-shake md:motion-duration-300 md:motion-ease-spring-snappy"}`}
              onClick={async () => {
                setIsPending(true);
                deleteJoke(joke.id);
                toast.success("Joke has been removed.");
                window.location.reload();
              }}
              disabled={isPending}
            >
              {isPending ? (
                <ArrowClockwise className={"size-6 animate-spin"} />
              ) : (
                <Trash className="size-6" />
              )}
              <p aria-hidden="true" className="aria-hidden:hidden">
                delete
              </p>
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
