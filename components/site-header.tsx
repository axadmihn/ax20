import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sections = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Accessible Science", href: "#accessible-science" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="#hero" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-base font-bold text-turquoise shadow-glow">
            ax
          </span>
          Axnmihn
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {sections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-turquoise focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="#contact">Collaborate</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
