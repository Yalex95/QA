import { Icon } from "@iconify/react";
import ExpertiseCertBadge from "./ExpertiseCertBadge";



export default function ExpertiseContent({certifications}) {
  return (
    <div className="expertise__content">
      <div>
        <h2 className="expertise__title">
          <span className="expertise__line"></span>
          Expertise in Manufacturing & Engineering
        </h2>
        <p className="expertise__desc">
          Dedicated professional with over a decade of experience ensuring the
          highest standards of safety and quality across complex industrial
          environments. My approach integrates rigorous technical audits with
          proactive safety cultures to minimize risk and maximize operational
          efficiency.
        </p>
      </div>
      <div className="expertise__iso_certs ">
        {certifications.map((cert, index) => (
          <ExpertiseCertBadge key={index} certification={cert} />
        ))}
      </div>
      <a href="#" className="expertise__link">
        Read full Professional Bio
        <Icon icon="material-symbols:arrow-forward" />
      </a>
    </div>
  );
}
