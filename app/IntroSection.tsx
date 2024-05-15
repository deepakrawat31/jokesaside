"use client";

import Link from "next/link";
import Stroke from "./stroke";
import { GithubLogo, Code, LinkedinLogo } from "@phosphor-icons/react";

export default function IntroSection() {
   return (
      <div className="flex flex-col gap-8 justify-between h-full">
         <span className="flex flex-col gap-4 uppercase">
            <h1 className="text-5xl lg:text-7xl font-bold relative w-fit">
               <span>jokesaside</span>
               <Stroke />
            </h1>
            <p className="font-semibold">
               lighten up your day with a little{" "}
               <strong className="text-amber-400">joke</strong> !
            </p>
            <p className="font-semibold">
               build in Next.js, Vercel Postgres, Drizzle, Tailwind CSS,{" "}
               <Link
                  href={"https://official-joke-api.appspot.com/jokes/random"}
                  className="underline underline-offset-2 hover:text-amber-400 focus:text-amber-400"
               >
                  Joke API
               </Link>
               .
            </p>
            <button className="w-fit flex items-center gap-0.5 font-semibold uppercase">
               <span className="p-2.5 ring-2 ring-black bg-amber-400 text-lg">
                  signin with github
               </span>
               <span className="p-2 ring-2 ring-black bg-amber-400">
                  <GithubLogo size={32} />
               </span>
            </button>
         </span>
         <span className="flex items-center gap-4">
            <Link href={"/"} className="p-2 ring-2 ring-black bg-amber-400">
               <Code size={32} />
            </Link>
            <Link href={"/"} className="p-2 ring-2 ring-black bg-amber-400">
               <LinkedinLogo size={32} />
            </Link>
         </span>
      </div>
   );
}
