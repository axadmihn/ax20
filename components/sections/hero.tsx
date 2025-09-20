import Link from "next/link";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-white/10 bg-slate-950"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-turquoise/30 to-aurora/40 opacity-80" />
        <div className="absolute inset-0 bg-hero-aurora blur-3xl opacity-80 animate-aurora" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-28 md:flex-row md:items-center">
        <FadeIn className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100/80">
            Precision through protocol
          </span>
          <h1 id="hero-title" className="text-balance font-bold text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Axnmihn: From Cognition to Structure
          </h1>
          <p className="max-w-xl text-pretty text-lg text-slate-200">
            Gene therapy · Data science · Clinical decision support. Transforming uncertainty into precision frameworks that align biology, computation, and clinical pragmatism.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="#accessible-science">Explore Protocol</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#research">Read My Research</Link>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={120} className="flex-1">
          <div className="relative mx-auto max-w-xl rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="absolute -top-10 right-10 h-32 w-32 rounded-full bg-turquoise/40 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 left-6 h-40 w-40 rounded-full bg-aurora/30 blur-3xl" aria-hidden />
            <div className="relative space-y-4 text-sm text-slate-100/90">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-slate-200/70">Protocol snapshot</p>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">Cognitive layer</dt>
                  <dd className="mt-2 text-base font-semibold text-white">Consistency vectors</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">Therapeutic layer</dt>
                  <dd className="mt-2 text-base font-semibold text-white">AAV + adaptive effectors</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">Decision systems</dt>
                  <dd className="mt-2 text-base font-semibold text-white">Clinical inference maps</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-slate-300">Mode</dt>
                  <dd className="mt-2 text-base font-semibold text-white">Lab-to-clinic translation</dd>
                </div>
              </dl>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
