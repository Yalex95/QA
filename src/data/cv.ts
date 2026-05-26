import image from "../features/caseStudies/assets/Refinery project.png";

//---------------------------------------- HERO
type Hero = {
  title: string[]; // Ahora serán claves de traducción
  description: string; // Clave de traducción
};

export const HERO: Hero = {
  title: [
    "hero.title.0", // "Industrial QA & HS&E Specialist |"
    "hero.title.1", // "Compliance, Safety & Improvement"
  ],
  description: "hero.description",
};

//---------------------------------------- EXPERTISE
type Expertise = {
  title: string; // Clave de traducción
  certifications: string[]; // Array de claves
  desc: string; // Clave de traducción
};

export const EXPERTISE: Expertise = {
  title: "expertise.title",
  desc: "expertise.desc",
  certifications: [
    "expertise.certifications.0", // ISO 9001
    "expertise.certifications.1", // ISO 14001
    "expertise.certifications.2", // ISO 45001
    "expertise.certifications.3", // ISO 13485
  ],
};

// ---------------------------------------- Core Specialist
type SpecialistList = {
  icon: string;
  title: string; // Clave de traducción
  text: string; // Clave de traducción
};

export const SPECIALIST_LIST: SpecialistList[] = [
  {
    icon: "material-symbols:fact-check-outline",
    title: "core_specialist.specialist_list.0.title",
    text: "core_specialist.specialist_list.0.text",
  },
  {
    icon: "icon-park-outline:caution",
    title: "core_specialist.specialist_list.1.title",
    text: "core_specialist.specialist_list.1.text",
  },
  {
    icon: "streamline:justice-hammer-remix",
    title: "core_specialist.specialist_list.2.title",
    text: "core_specialist.specialist_list.2.text",
  },
  {
    icon: "ic:baseline-fact-check",
    title: "core_specialist.specialist_list.3.title",
    text: "core_specialist.specialist_list.3.text",
  },
  {
    icon: "carbon:growth",
    title: "core_specialist.specialist_list.4.title",
    text: "core_specialist.specialist_list.4.text",
  },
];

type CoreSpecialist = {
  title: string; // Clave de traducción
  paragraph: string; // Clave de traducción
  specialistList: SpecialistList[];
};

export const CORE_SPECIALIST: CoreSpecialist = {
  title: "core_specialist.title",
  paragraph: "core_specialist.paragraph",
  specialistList: SPECIALIST_LIST,
};

// Metrics
type Metrics = {
  id: number;
  metric: string; // Mantiene el valor numérico (35%, 100%, etc.)
  impact: string; // Clave de traducción
};

export const METRICS_IMPACT: Metrics[] = [
  { id: 1, metric: "35%", impact: "metrics_impact.0.impact" },
  { id: 2, metric: "100%", impact: "metrics_impact.1.impact" },
  { id: 3, metric: "15+", impact: "metrics_impact.2.impact" },
];

export type Profile = {
  hero: Hero;
  experience: Expertise;
};

export const PROFILE_INFO: Profile = {
  hero: HERO,
  experience: EXPERTISE,
};

//---------------------------------------- CASE STUDIES
export type caseStudiesItem = {
  id?: number;
  badge: string; // Clave de traducción
  image_link: string;
  title: string; // Clave de traducción
  problem: string; // Clave de traducción
  action: string; // Clave de traducción
  result: string; // Clave de traducción
};

export const CASE_STUDIES: caseStudiesItem[] = [
  {
    id: 1,
    badge: "case_studies.items.0.badge",
    image_link: image,
    title: "case_studies.items.0.title",
    problem: "case_studies.items.0.problem",
    action: "case_studies.items.0.action",
    result: "case_studies.items.0.result",
  },
  {
    id: 2,
    badge: "case_studies.items.1.badge",
    image_link: image,
    title: "case_studies.items.1.title",
    problem: "case_studies.items.1.problem",
    action: "case_studies.items.1.action",
    result: "case_studies.items.1.result",
  },
];

type case_studies_type = {
  title: string; // Clave de traducción
  paragraph: string; // Clave de traducción
  case_studies: caseStudiesItem[];
};

export const case_studies_data: case_studies_type = {
  title: "case_studies.title",
  paragraph: "case_studies.paragraph",
  case_studies: CASE_STUDIES,
};

//---------------------------------------- CERTIFICATIONS
export type certProps = {
  type: string; // Clave de traducción
  name: string; // Clave de traducción
  issuing_org: string; // Mantiene valor (IRCA)
  year: string; // Mantiene valor
  id: string; // Mantiene valor
  link: string; // Mantiene valor
  icon: string; // Mantiene valor
};

export const CERTIFICATIONS: certProps[] = [
  {
    type: "certifications_section.certifications.0.type",
    name: "certifications_section.certifications.0.name",
    issuing_org: "IRCA",
    year: "2022",
    id: "QA-9001-8841-X",
    link: "/certificates/iso-9001-lead-auditor.pdf",
    icon: "iconamoon:certificate-badge",
  },
  {
    type: "certifications_section.certifications.1.type",
    name: "certifications_section.certifications.1.name",
    issuing_org: "IRCA",
    year: "2022",
    id: "QA-9001-8842-X",
    link: "/certificates/osha-30-hour.pdf",
    icon: "tdesign:secured",
  },
  {
    type: "certifications_section.certifications.2.type",
    name: "certifications_section.certifications.2.name",
    issuing_org: "IRCA",
    year: "2022",
    id: "QA-9001-8843-X",
    link: "/certificates/iso-45001-internal-auditor.pdf",
    icon: "material-symbols:ecg-heart-outline",
  },
];

export const certification_section: {
  title: string; // Clave de traducción
  paragraph: string; // Clave de traducción
  certifications: certProps[];
} = {
  title: "certifications_section.title",
  paragraph: "certifications_section.paragraph",
  certifications: CERTIFICATIONS,
};

//---------------------------------------- CONTACT
export type ContactSection = {
  title: string; // Clave de traducción
  paragraph: string; // Clave de traducción
  mail: string; // Mantiene valor
  location: string; // Mantiene valor
  cv_link: string; // Mantiene valor
  linkedIn: string; // Mantiene valor
  wa: string; // Mantiene valor
  support_title: string; // Clave de traducción
  support_p: string; // Clave de traducción
  disclaimer: string; // Clave de traducción
};
const phone = "5212345678";

const message = encodeURIComponent("Hola, vi su página y me interesa obtener más información sobre sus servicios.");

const whatsappLink = `https://wa.me/${phone}?text=${message}`;

export const contactSeccion: ContactSection = {
  title: "contact.title",
  paragraph: "contact.paragraph",
  mail: "qa@gmail.com",
  location: "Tijuana, BC Mexico",
  cv_link: "#",
  linkedIn: "https://www.linkedin.com/in/",
  wa: whatsappLink,
  support_title: "contact.support_title",
  support_p: "contact.support_p",
  disclaimer: "contact.disclaimer",
};
