import accessibleScience from "@/content/accessible-science.json";
import researchEntries from "@/content/research.json";
import siteContent from "@/content/site.json";
import type { AccessibleConcept, ResearchEntry, SiteContentData } from "@/types/content";

import { AboutSection } from "@/components/sections/about";
import { AccessibleScienceSection } from "@/components/sections/accessible-science";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ResearchSection } from "@/components/sections/research";
import { SkillsSection } from "@/components/sections/skills";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection content={(siteContent as SiteContentData).about} />
      <ResearchSection entries={researchEntries as ResearchEntry[]} />
      <SkillsSection skills={(siteContent as SiteContentData).skills} />
      <AccessibleScienceSection concepts={accessibleScience as AccessibleConcept[]} />
      <ContactSection contact={(siteContent as SiteContentData).contact} />
    </>
  );
}
