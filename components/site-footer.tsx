export function SiteFooter() {
  const buildId = process.env.BUILD_ID ?? "dev";
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-slate-300 md:flex-row md:items-center">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-base font-bold text-turquoise">
            ax
          </span>
          Axnmihn
        </div>
        <p className="text-sm text-slate-400">© 2025 Axnmihn · Build {buildId}</p>
      </div>
    </footer>
  );
}
