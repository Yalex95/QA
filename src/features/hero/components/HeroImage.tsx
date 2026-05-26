import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import HeroImg from "../assets/HS&E QA.svg";

export default function HeroImage() {
  const { t } = useTranslation();
  return (
    <div className="hero__image_container">
      <img
        src={HeroImg}
        alt="Industrial QA & HS&E Specialist"
        className="hero__image"
      />
      <div className="hero__cert_badge">
        <span className="hero__cert_icon">
          <Icon
            icon="ix:certificate-success-filled"
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </span>
        <p className="hero__cert_text">
          <span>{t("hero.certified_prof")}</span>
          <span>ISO & OSHA Compliance</span>
        </p>
      </div>
    </div>
  );
}
