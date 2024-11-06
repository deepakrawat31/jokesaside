export default function MainBlock() {
  return (
    <div className="col-span-1 row-span-1 flex flex-col gap-4 rounded-lg bg-neutral-900 p-4 md:col-span-3 md:row-span-3">
      <h1 className="text-5xl font-bold uppercase md:text-6xl">jokesaside</h1>
      <p className="text-neutral-400">
        {`Welcome to Jokesaside – your personal hub for jokes worth saving! From puns to punchlines, find and bookmark the humor that makes you smile, so it’s always just a click away.`}
      </p>
    </div>
  );
}
