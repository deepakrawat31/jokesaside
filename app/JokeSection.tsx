"use client";

import { ArrowsClockwise, Heart, Robot, User } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function JokeSection() {
   const [joke, setJoke] = useState<{
      id: number;
      type: string;
      setup: string;
      punchline: string;
   } | null>(null);
   const [fetching, setFetching] = useState(true);

   const fetchJoke = () => {
      setFetching(true);
      fetch("https://official-joke-api.appspot.com/jokes/random")
         .then((res) => res.json())
         .then((data) => {
            setJoke(data);
            setFetching(false);
         });
   };

   useEffect(() => {
      fetchJoke();
   }, []);

   return (
      <div className="h-full bg-amber-400 ring-2 ring-black p-4 flex flex-col gap-4 justify-between items-center">
         <div className="flex flex-col justify-between gap-6 h-full w-full">
            <div className="flex items-center justify-between">
               <button
                  onClick={() => fetchJoke()}
                  disabled={fetching ? true : false}
                  className={`bg-amber-200 p-1 ring-2 ring-black disabled:bg-red-400 ${
                     fetching
                        ? ""
                        : "hover:scale-95 focus:scale-95 transition-transform"
                  }`}
               >
                  <ArrowsClockwise size={32} />
               </button>

               <button
                  disabled={fetching ? true : false}
                  className={`bg-amber-200 p-1 ring-2 ring-black disabled:bg-red-400 ${
                     fetching
                        ? ""
                        : "hover:scale-95 focus:scale-95 transition-transform"
                  }`}
               >
                  <Heart size={32} />
               </button>
            </div>
            {fetching ? (
               <Loading />
            ) : (
               <>
                  <div className="flex-1 p-2 ring-2 ring-black bg-amber-200 flex flex-col gap-6">
                     <span className=" flex items-start gap-2">
                        <span className="p-1 bg-amber-50 ring-2 ring-black">
                           <Robot size={32} />
                        </span>
                        <span className="p-2 bg-amber-400 ring-2 ring-black font-semibold">
                           {joke?.setup}
                        </span>
                     </span>
                     <span className=" flex flex-row-reverse items-start gap-2">
                        <span className="p-1 bg-amber-50 ring-2 ring-black">
                           <User size={32} />
                        </span>
                        <span className="p-2 bg-amber-400 ring-2 ring-black font-semibold">
                           ...?
                        </span>
                     </span>
                     <span className=" flex items-start gap-2">
                        <span className="p-1 bg-amber-50 ring-2 ring-black">
                           <Robot size={32} />
                        </span>
                        <span className="p-2 bg-amber-400 ring-2 ring-black font-semibold">
                           {joke?.punchline}
                        </span>
                     </span>
                  </div>
                  <div className="w-fit px-2 py-1 bg-amber-200 ring-2 ring-black uppercase text-sm font-semibold">
                     <span>{joke?.type}</span>
                  </div>
               </>
            )}
         </div>
      </div>
   );
}
