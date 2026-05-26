import { EXPERTISE } from "@/data/cv";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import ExpertiseCertBadge from "./ExpertiseCertBadge";

export default function ExpertiseContent() {
  const { t } = useTranslation();

  return (
    <div className="expertise__content">
      <div>
        <h2 className="expertise__title">
          <span className="expertise__line"></span>
          {t(EXPERTISE.title)}
        </h2>
        <p className="expertise__desc">{t(EXPERTISE.desc)}</p>
      </div>
      <div className="expertise__iso_certs ">
        {EXPERTISE.certifications.map((cert, index) => (
          <ExpertiseCertBadge key={index} certification={t(cert)} />
        ))}
      </div>
      <a href="#" className="expertise__link">
        {t("expertise.read_professional_bio")}
        <Icon icon="material-symbols:arrow-forward" />
      </a>
    </div>
  );
}
