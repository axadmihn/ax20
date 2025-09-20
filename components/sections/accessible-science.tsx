import Image from "next/image";

import { FadeIn } from "@/components/fade-in";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { AccessibleConcept } from "@/types/content";

type AccessibleScienceProps = {
  concepts: AccessibleConcept[];
};

export function AccessibleScienceSection({ concepts }: AccessibleScienceProps) {
  return (
    <section id="accessible-science" aria-labelledby="accessible-science-title" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-turquoise/80">Accessible science</p>
          <h2 id="accessible-science-title" className="text-balance text-3xl font-semibold text-white sm:text-4xl">
            Explainers for collaborators and families
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300">
            Plain-language diagrams showing how Axnmihn uses adeno-associated virus (AAV) vectors and adaptive gene therapy logic to deliver safe, targeted interventions.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {concepts.map((concept, index) => (
            <FadeIn key={concept.title} delay={index * 80}>
              <Card className="h-full">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Image src={concept.icon} alt="" width={48} height={48} className="h-full w-full" aria-hidden />
                  </div>
                  <div>
                    <CardTitle>{concept.title}</CardTitle>
                    <CardDescription>{concept.summary}</CardDescription>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {concept.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-left">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-turquoise" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
