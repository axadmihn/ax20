import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-center text-slate-200">
      <p className="text-sm uppercase tracking-[0.3em] text-turquoise/80">Not found</p>
      <h1 className="text-3xl font-semibold text-white">The requested document is unavailable.</h1>
      <p className="max-w-md text-base text-slate-400">
        The resource you are looking for might have been renamed or moved as the protocol evolves.
      </p>
      <Link href="/" className="text-turquoise hover:text-turquoise/80">
        Return to home
      </Link>
    </div>
  );
}
