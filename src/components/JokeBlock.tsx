"use client";

import db from "@/db";
import { jokeTable } from "@/db/schema";
import { ArrowClockwise, BookmarkSimple } from "@phosphor-icons/react/dist/ssr";
import { useQuery } from "@tanstack/react-query";

interface Joke {
  error: boolean;
  category: string;
  joke: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
}

export default function JokeBlock() {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["joke"],
    queryFn: async () => {
      const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      return (await res.json()) as Joke;
    },
  });

  return (
    <div className="col-span-1 row-span-1 flex flex-row gap-4 overflow-hidden rounded-lg bg-neutral-900 p-4 md:col-span-2 md:row-span-2 md:flex-col-reverse">
      {isFetching ? (
        <div className="motion-preset-fade-lg flex flex-1 flex-col justify-between gap-2 md:justify-end">
          <span className="flex flex-col gap-2">
            <span className="h-4 rounded-md bg-neutral-800"></span>
            <span className="h-4 rounded-md bg-neutral-800"></span>
          </span>
          <span className="h-4 w-1/4 rounded-md bg-neutral-800"></span>
        </div>
      ) : (
        <span className="motion-preset-slide-down flex flex-1 flex-col justify-between gap-4 motion-ease-out-quad md:justify-end">
          <p>{data?.joke}</p>
          <p className="w-fit rounded-md bg-neutral-800 px-3 py-1.5 text-sm">
            #{data?.category}
          </p>
        </span>
      )}
      <span className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className={`rounded-md bg-neutral-800 p-2 ring-1 ring-neutral-600/60 ${isFetching ? "" : "md:hover:motion-preset-shake md:motion-duration-300 md:motion-ease-spring-snappy"}`}
        >
          <ArrowClockwise
            className={`size-6 ${isFetching ? "animate-spin" : ""}`}
          />
          <p aria-hidden="true" className="aria-hidden:hidden">
            refetch
          </p>
        </button>
        <button
          disabled={isFetching}
          onClick={async () => {
            if (!data) {
              return console.log("NO DATA!");
            } else {
              await db.insert(jokeTable).values({
                joke: data.joke,
                category: data.category,
              });
            }
          }}
          className={`rounded-md bg-neutral-800 p-2 ring-1 ring-neutral-600/60 ${isFetching ? "" : "md:hover:motion-preset-shake md:motion-duration-300 md:motion-ease-spring-snappy"}`}
        >
          <BookmarkSimple className="size-6" />
          <p aria-hidden="true" className="aria-hidden:hidden">
            bookmark
          </p>
        </button>
      </span>
    </div>
  );
}
