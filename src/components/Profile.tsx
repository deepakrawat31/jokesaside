"use client";

import { ArrowClockwise, FinnTheHuman } from "@phosphor-icons/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const { data: session } = useSession();

  return (
    <div
      className="relative inline-flex cursor-pointer rounded-full"
      onClick={() => {
        if (!isPending) {
          setMenuOpen(!menuOpen);
        }
      }}
    >
      {!isPending ? (
        <>
          {session?.user?.image != null ? (
            <img
              src={session?.user?.image}
              alt="user avatar"
              className="aspect-square h-8 rounded-full md:hover:motion-preset-shake md:motion-ease-spring-snappy"
            />
          ) : (
            <span className="p-2 md:hover:motion-preset-shake md:motion-ease-spring-snappy">
              <FinnTheHuman className="size-6" />
            </span>
          )}
        </>
      ) : (
        <ArrowClockwise className="size-6 animate-spin" />
      )}
      {menuOpen && (
        <ul className="motion-preset-slide-down-md absolute -right-0 top-14 z-50 flex flex-col rounded-md bg-neutral-300 font-semibold uppercase text-neutral-900 motion-ease-spring-snappy">
          <li className="inline-flex">
            <Link href="/profile" className="p-2">
              Profile
            </Link>
          </li>
          <li className="inline-flex p-2">
            <button
              onClick={async () => {
                setIsPending(true);
                await signOut({ redirectTo: "/" });
              }}
              className="uppercase"
            >
              Logout
            </button>
          </li>
          <li></li>
        </ul>
      )}
    </div>
  );
}
