"use client";
import { ArrowClockwise, GithubLogo } from "@phosphor-icons/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [isPending, setIsPending] = useState(false);

  return (
    <button
      className={`motion-preset-bounce flex items-center gap-1 ${isPending ? "" : "md:hover:motion-preset-wiggle md:motion-ease-spring-snappy"}`}
      disabled={isPending}
      onClick={() => {
        setIsPending(true);
        signIn("github");
      }}
    >
      {isPending ? (
        <ArrowClockwise className="size-6 animate-spin" />
      ) : (
        <GithubLogo className="size-6" weight="bold" />
      )}
      <h3
        aria-hidden="true"
        className="text-lg font-bold uppercase leading-tight aria-hidden:hidden md:aria-hidden:inline-flex"
      >
        Github
      </h3>
    </button>
  );
}
