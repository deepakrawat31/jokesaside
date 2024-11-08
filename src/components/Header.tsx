import { Cactus, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-neutral-300 p-0 md:p-2">
      <Link
        href="/"
        className="motion-preset-bounce flex items-center gap-1 motion-ease-spring-snappy md:hover:motion-preset-wiggle"
      >
        <Cactus className="size-6" weight="bold" />
        <h3
          aria-hidden="true"
          className="text-lg font-bold uppercase leading-tight aria-hidden:hidden md:aria-hidden:inline-flex"
        >
          Home
        </h3>
      </Link>
      <button className="motion-preset-bounce flex items-center gap-1 motion-ease-spring-snappy md:hover:motion-preset-wiggle">
        <GithubLogo className="size-6" weight="bold" />
        <h3
          aria-hidden="true"
          className="text-lg font-bold uppercase leading-tight aria-hidden:hidden md:aria-hidden:inline-flex"
        >
          Github
        </h3>
      </button>
    </header>
  );
}
