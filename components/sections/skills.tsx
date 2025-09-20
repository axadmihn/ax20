import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";

type SkillsSectionProps = {
  skills: string[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-gradient-to-b from-slate-950 to-slate-950/95 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-turquoise/80">Capabilities</p>
          <h2 id="skills-title" className="text-balance text-3xl font-semibold text-white sm:text-4xl">
            Systems fluency across biology, computation, and accountability
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300">
            An adaptive tag grid capturing the tools, methods, and heuristics in active use for Axnmihn collaborations.
          </p>
        </FadeIn>
        <FadeIn delay={90} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill, index) => (
              <Badge key={skill} className="justify-center text-base font-medium transition-shadow hover:shadow-glow" style={{ transitionDelay: `${index * 20}ms` }}>
                {skill}
              </Badge>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
