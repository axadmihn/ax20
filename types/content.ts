export type AboutContent = {
  role: string;
  summary: string;
  education: string[];
  focus: string[];
};

export type ContactContent = {
  email: string;
  linkedin: string;
  github: string;
};

export type ResearchEntry = {
  slug: string;
  title: string;
  summary: string;
  focus: string;
  readTime: string;
  body: string[];
};

export type AccessibleConcept = {
  title: string;
  summary: string;
  icon: string;
  points: string[];
};

type SiteContent = {
  about: AboutContent;
  skills: string[];
  contact: ContactContent;
};

export type SiteContentData = SiteContent;
