"use client";

import { ArrowClockwise } from "@phosphor-icons/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const { data: session } = useSession();

  function getInitials(fullName: string) {
    const names = fullName.split(" ");
    const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
    const lastInitial =
      names.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : "";

    return firstInitial + lastInitial;
  }
  let initials;
  if (session?.user?.name != null) {
    initials = getInitials(session?.user?.name);
  }

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
              className="aspect-square h-8 rounded-md"
            />
          ) : (
            <span className="rounded-md bg-neutral-900 p-2 font-semibold uppercase text-neutral-300">
              <p className="md:hover:motion-preset-shake md:motion-ease-spring-snappy">
                {initials}
              </p>
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
              onClick={() => {
                setIsPending(true);
                signOut();
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
