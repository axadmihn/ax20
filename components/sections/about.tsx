import Image from "next/image";

import { FadeIn } from "@/components/fade-in";
import type { AboutContent } from "@/types/content";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-slate-950 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:items-center">
        <FadeIn className="relative mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-1 shadow-glow">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-turquoise/30 via-transparent to-aurora/50" aria-hidden />
            <div className="relative rounded-[3rem] border border-white/20 bg-slate-950/80 p-8">
              <Image
                src="/images/profile-synth.svg"
                alt="Aris Axnmihn portrait abstraction"
                width={480}
                height={520}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={120} className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-turquoise/80">About</p>
            <h2 id="about-title" className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">
              {content.role}
            </h2>
          </div>
          <p className="max-w-2xl text-lg text-slate-200">{content.summary}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-turquoise/80">Education</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {content.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-turquoise/80">Focus areas</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {content.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
