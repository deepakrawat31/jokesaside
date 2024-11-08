import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import JokeBlock from "../components/JokeBlock";
import MainBlock from "../components/MainBlock";

export default function Home() {
  return (
    <main className="grid flex-1 grid-cols-1 grid-rows-3 gap-2 text-neutral-300 md:grid-cols-5">
      <MainBlock />
      <JokeBlock />
      <div className="col-span-1 row-span-1 flex flex-col justify-between gap-2 rounded-lg bg-neutral-900 p-4 md:col-span-2">
        <h2 className="text-2xl font-semibold uppercase">connect through</h2>
        <span className="flex items-center gap-4">
          <Link
            href="https://github.com/deepakrawat31/jokesaside"
            target="_blank"
            className="rounded-md bg-neutral-800 p-2 ring-1 ring-neutral-600/60 md:hover:motion-preset-shake md:motion-duration-300 md:motion-ease-spring-snappy"
          >
            <p aria-hidden="true" className="aria-hidden:hidden">
              link to github repo
            </p>
            <GithubLogo className="size-6" />
          </Link>
        </span>
      </div>
    </main>
  );
}
