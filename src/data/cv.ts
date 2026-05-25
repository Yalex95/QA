import image from "../features/caseStudies/assets/Refinery project.png";
//---------------------------------------- HERO
type Hero = {
  title: string[];
  description: string;
};

export const HERO: Hero = {
  title: [
    "Industrial QA & HS&E Specialist |",
    "Compliance, Safety & Improvement",
  ],
  description:
    "Driving quality systems, safety regulations, and risk management with precision and reliability across global industrial sectors.",
};

//---------------------------------------- EXPERTICE
type Expertise = {
  title: string;
  certifications: string[];
};
export const EXPERTISE: Expertise = {
  title: "Expertise in Manufacturing & Engineering",
  desc: "Dedicated professional with over a decade of experience ensuring the highest standards of safety and quality across complex industrial environments. My approach integrates rigorous technical audits with proactive safety cultures to minimize risk and maximize operational efficiency.",
  certifications: [
    "ISO 9001: Quality Management",
    "ISO 14001: Environmental",
    "ISO 45001: Ocupational Healt",
    "ISO 13485: Medical devices",
  ],
};

// ---------------------------------------- Core Specialist
type SpecialistList = {
  icon: string;
  title: string;
  text: string;
};

export const SPECIALIST_LIST: SpecialistList[] = [
  {
    icon: "material-symbols:fact-check-outline",
    title: "Quality Assurance & Control",
    text: "Implementing robust QA frameworks for zero-defect manufacturing.",
  },
  {
    icon: "icon-park-outline:caution",
    title: "Risk Assessment & Analysis",
    text: "Identifying and mitigating operational hazards before they occur.",
  },
  {
    icon: "streamline:justice-hammer-remix",
    title: "Regulatory Compliance",
    text: "Navigating complex legal and industry- specific regulations.",
  },
  {
    icon: "ic:baseline-fact-check",
    title: "Safety Training & Audits",
    text: "Comprehensive internal audits and specialized staff training.",
  },
  {
    icon: "carbon:growth",
    title: "Continuous Improvement",
    text: "Lean and Six Sigma methodologies for operational excellence.",
  },
];

type CoreSpecialist = {
  title: string;
  paragraph: string;
};
export const CORE_SPECIALIST: CoreSpecialist = {
  title: "Core Specialist Expertise",
  paragraph:
    " Providing end-to-end industrial solutions through technical mastery and strategic safety implementation.",
  specialistList: SPECIALIST_LIST,
};

// Metrics
type Metrics = {
  id: number;
  metric: string;
  impact: string;
};
export const METRICS_IMPACT: Metrics = [
  { id: 1, metric: "35%", impact: "Reduction in Workplace Incidents" },
  { id: 2, metric: "100%", impact: "Audit Compliance Rate" },
  { id: 3, metric: "15+", impact: "Major Industrial Audits Conducted" },
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
  badge: string;
  image_link: string;
  title: string;
  problem: string;
  action: string;
  result: string;
};

export const CASE_STUDIES: caseStudiesItem[] = [
  {
    id: 1,
    badge: "Oil & Gas",
    image_link: image,
    title: "Refinery HS&E Systems Overhaul",
    problem:
      "Increasing minor incidents and outdated risk reporting mechanisms leading to production delays.",
    action:
      "Implemented a real-time digital hazard reporting system and localized safety training workshops.",
    result: "40% drop in incidents within 6 months. 100% staff adoption rate.",
  },
  {
    id: 2,
    badge: "Manufacturing",
    image_link: image,

    title: "Automotive Quality Control Optimization",
    problem:
      "High rejection rates at the final assembly stage causing significant material waste.",
    action:
      "Deployed Lean Six Sigma DMAIC process and upgraded station-level QA testing equipment.",
    result:
      "Reduced scrap rate by 22%. Annual savings of $450k in material costs.",
  },
];
type case_studies_type = {
  title: string;
  paragraph: string;
  case_studies: caseStudiesItem[];
};
export const case_studies_data: case_studies_type = {
  title: "Case Studies",
  paragraph:
    "Real-world solutions delivered across diverse industrial landscapes.",
  case_studies: CASE_STUDIES,
};
//---------------------------------------- CERTIFICATIONS
export type certProps = {
  type: string;
  name: string;
  issuing_org: string;
  year: string;
  id: string;
  link: string;
  icon: string;
};

export const CERTIFICATIONS: certProps[] = [
  {
    type: "ISO",
    name: "ISO 9001:2015 Lead Auditor",
    issuing_org: "IRCA",
    year: "2022",
    id: "QA-9001-8841-X",
    link: "/certificates/iso-9001-lead-auditor.pdf",
    icon: "iconamoon:certificate-badge",
  },
  {
    type: "OSHA",
    name: "OSHA 30-Hour Outreach",
    issuing_org: "IRCA",
    year: "2022",
    id: "QA-9001-8842-X",
    link: "/certificates/osha-30-hour.pdf",
    icon: "tdesign:secured",
  },
  {
    type: "Safety",
    name: "ISO 45001 Internal Auditor",
    issuing_org: "IRCA",
    year: "2022",
    id: "QA-9001-8843-X",
    link: "/certificates/iso-45001-internal-auditor.pdf",
    icon: "material-symbols:ecg-heart-outline",
  },
];

export const certification_section: {
  title: string;
  paragraph: string;
  certificaitons: certProps[];
} = {
  title: "Certifications & Credentials",
  paragraph:
    "Verified professional standards and international industry qualifications.",
  certifications: CERTIFICATIONS,
};

//---------------------------------------- CONTACT
export type ContactSection = {
  title: string;
  paragraph: string;
  consultation: string;
  mail: string;
  location: string;
  cv_link: string;
  linkedIn: string;
  wa: string;
  support_title: string;
  support_p: string;
  disclaimer: string;
};
export const contactSeccion: ContactSection = {
  title: "Let's Discuss Your Next Compliance Goal",
  paragraph:
    " Looking to enhance your safety protocols or implement a global quality system? Reach out for a consultation.",
  mail: "qa@gmail.com",
  location: "Tijuana, BC Mexico",
  cv_link: "#",
  linkedIn: "#",
  wa: "",
  support_title: "Professional Instant Support",
  support_p:
    "Get immediate responses regarding safety audits, quality system implementations, or general consultations.",
  disclamer: "Typically responds within 1 hour during business hours",
};

//---------------------------------------- FOOTER
