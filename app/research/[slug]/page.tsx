import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import researchEntries from "@/content/research.json";
import type { ResearchEntry } from "@/types/content";

const entries = researchEntries as ResearchEntry[];

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = entries.find((item) => item.slug === params.slug);
  if (!entry) {
    return {
      title: "Research not found"
    };
  }
  return {
    title: `${entry.title} — Axnmihn`,
    description: entry.summary,
    openGraph: {
      title: entry.title,
      description: entry.summary
    },
    twitter: {
      title: entry.title,
      description: entry.summary
    }
  };
}

export default function ResearchDetailPage({ params }: { params: { slug: string } }) {
  const entry = entries.find((item) => item.slug === params.slug);
  if (!entry) {
    notFound();
  }

  return (
    <article className="bg-slate-950 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="text-sm text-turquoise transition hover:text-turquoise/80"
        >
          ← Back to protocol
        </Link>
        <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">{entry.title}</h1>
        <p className="mt-4 text-lg text-slate-300">{entry.summary}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{entry.focus}</span>
          <span>{entry.readTime}</span>
        </div>
        <div className="mt-12 space-y-6 font-serif text-lg leading-relaxed text-slate-100">
          {entry.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
