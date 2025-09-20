import Link from "next/link";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

import { Github, Linkedin, Mail } from "lucide-react";
import type { ContactContent } from "@/types/content";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-turquoise/80">Collaboration</p>
          <h2 id="contact-title" className="text-balance text-3xl font-semibold text-white sm:text-4xl">
            Build shared research protocols, exchange data, or co-design clinical decision systems.
          </h2>
          <p className="text-lg text-slate-300">
            Axnmihn invites dialogue across labs, clinicians, and fellow investigators. Share your context—we will respond with precision questions and transparent assumptions.
          </p>
        </FadeIn>
        <FadeIn delay={120} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href={`mailto:${contact.email}`}>
              <Mail className="mr-2 h-4 w-4" aria-hidden />Email Axnmihn
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href={contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4" aria-hidden />LinkedIn
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={contact.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" aria-hidden />GitHub
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
