import { EXPERTISE } from "@/data/cv";
import { Icon } from "@iconify/react";
import ExpertiseCertBadge from "./ExpertiseCertBadge";

export default function ExpertiseContent() {
  return (
    <div className="expertise__content">
      <div>
        <h2 className="expertise__title">
          <span className="expertise__line"></span>
          {EXPERTISE.title}
        </h2>
        <p className="expertise__desc">{EXPERTISE.desc}</p>
      </div>
      <div className="expertise__iso_certs ">
        {EXPERTISE.certifications.map((cert, index) => (
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
