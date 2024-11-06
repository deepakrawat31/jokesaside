import { Cactus, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-neutral-300 p-0 md:p-2">
      <Link
        href="/"
        className="motion-preset-bounce motion-ease-spring-snappy md:hover:motion-preset-wiggle flex items-center gap-1"
      >
        <Cactus className="size-6" weight="bold" />
        <h3 className="hidden text-lg font-bold uppercase leading-tight md:inline-flex">
          Home
        </h3>
      </Link>
      <button className="motion-preset-bounce motion-ease-spring-snappy md:hover:motion-preset-wiggle flex items-center gap-1">
        <GithubLogo className="size-6" weight="bold" />
        <h3 className="hidden text-lg font-bold uppercase leading-tight md:inline-flex">
          Github
        </h3>
      </button>
    </header>
  );
}
