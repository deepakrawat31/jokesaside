import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 uppercase">
      <h1 className="text-6xl font-black">Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <Link
        href="/"
        className="flex items-center gap-2 md:hover:motion-preset-shake md:motion-duration-300 md:motion-ease-spring-snappy"
      >
        <p>Go to Home</p>
        <ArrowUpRight className="size-6" weight="light" />
      </Link>
    </div>
  );
}
