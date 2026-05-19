import { Icon } from "@iconify/react";
import ExpertiseCertBadge from "./ExpertiseCertBadge";
const certifications = [
  "ISO 9001: Quality Management",
  "ISO 14001: Environmental",
  "ISO 45001: Ocupational Healt",
  "ISO 13485: Medical devices",
];
export default function ExpertiseContent() {
  return (
    <div className="expertise__content">
      <h2 className="expertise__title">
        Expertise in Manufacturing & Engineering
      </h2>
      <p className="expertise__desc">
        Dedicated professional with over a decade of experience ensuring the
        highest standards of safety and quality across complex industrial
        environments. My approach integrates rigorous technical audits with
        proactive safety cultures to minimize risk and maximize operational
        efficiency.
      </p>
      <div className="expertise__iso_certs">
        {certifications.map((cert, index) => (
          <ExpertiseCertBadge key={index} certification={cert} />
        ))}
      </div>
      <a href="#">
        Read full Professional Bio
        <Icon Icon="material-symbols:arrow-forward" />
      </a>
    </div>
  );
}
