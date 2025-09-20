import Link from "next/link";

import { FadeIn } from "@/components/fade-in";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ResearchEntry } from "@/types/content";

type ResearchSectionProps = {
  entries: ResearchEntry[];
};

export function ResearchSection({ entries }: ResearchSectionProps) {
  return (
    <section id="research" aria-labelledby="research-title" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-turquoise/80">Projects & Research</p>
          <h2 id="research-title" className="text-balance text-3xl font-semibold text-white sm:text-4xl">
            Inquiry documents tracing cognition, morphology, and accountability
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-300">
            Each protocol note documents how methodological naturalism informs clinical decision frameworks, laboratory design, and collaborative accountability.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {entries.map((entry, index) => (
            <FadeIn key={entry.slug} delay={index * 60}>
              <Card className="h-full">
                <CardTitle>{entry.title}</CardTitle>
                <CardDescription>{entry.summary}</CardDescription>
                <dl className="mt-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <span>Focus</span>
                    <span className="font-semibold text-slate-100">{entry.focus}</span>
                  </div>
                  <span>{entry.readTime}</span>
                </dl>
                <Link
                  href={`/research/${entry.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "mt-8 w-fit"
                  )}
                >
                  Read more
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
